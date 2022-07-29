import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { GlobalService } from '../services/global/global.service';
import { RepoService } from '../services/repo.service';
import { StoreService } from '../services/storage/store.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  client = false;
  member = false;
  admin = false;
  superuser = false;
  trainer = false;
  role! : string;
  prefersDark : any;

  constructor(private router : Router, private storage : StoreService, private auth: AuthService, private repo : RepoService, private global : GlobalService) { }

  ngOnInit() {
    this.prefersDark  = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleTheme(this.prefersDark.matches);

    this.auth.isLoggedIn.subscribe(log => {
      if (log) {
        this.storage.getKey('token').then(token => {
          if (token == null) {
            this.router.navigate(['login']);
            this.auth.logout();
            return;
          } else {
            const tokenObject = this.global.decodeToken(token);
            const now = Math.trunc(new Date().getTime() / 1000);
            if (tokenObject.exp <= now) {
                //token is no longer valid:
                console.log('token in storage is expired');
                this.storage.deleteKey('token');
                this.router.navigate(['login']);
                this.auth.logout();
                return;
            }
            this.repo.getUserRole(token).subscribe({
            next: (data : any) => {
              const r = data.role;
              //OVERRIDE TESTING:
              //this.superuser = true;
              if (r == 'client')
                this.client = true;
              if (r == 'member')
                this.member = true;
              if (r == 'admin')
                this.admin = true;
              if (r == 'superuser')
                this.superuser = true;
              if (r == 'trainer')
                this.trainer = true;
              }
            })
          }
        })
      }
    })
  }

  toggleTheme(event:any){

    if (event == true){
      document.body.classList.toggle('dark',event);
      const tog = document.getElementById('darkToggle');
      return;
    } else if (event == false){
      console.log("Light Mode");
      document.body.classList.toggle('dark',event);
      return;
    }

    console.log(event);
    if (event.detail.checked){
      console.log("Dark Mode");
      document.body.classList.toggle('dark',event.detail.checked);
    } else {
      console.log("Light Mode");
      document.body.classList.toggle('dark',event.detail.checked);
    }
  }

  logout() {
    this.auth.logout();
  }

}
