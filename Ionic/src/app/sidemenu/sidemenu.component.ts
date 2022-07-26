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

  constructor(private router : Router, private storage : StoreService, private auth: AuthService, private repo : RepoService, private global : GlobalService) { }

  ngOnInit() {


    this.auth.isLoggedIn.subscribe(log => { //runs once logged in

      if (log) { //check if logged in

        this.storage.getKey('token').then(token => { //fetch token from storage

          if (token == null) { //no token was found

            this.router.navigate(['login']);
            this.auth.logout();
            return;

          } else {

            this.repo.getUserRole(token).subscribe({

              next: (data : any) => { //token was valid
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
              },

              error: (er) => { //token was not valid
                console.log('token in storage is expired', er);
                this.storage.deleteKey('token');
                this.router.navigate(['login']);
                this.auth.logout();
                return;
              }

            });

          }
        })
      }

    })
  }

  toggleTheme(event:any){
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
