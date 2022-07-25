import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
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

  constructor(private storage : StoreService, private auth: AuthService, private repo : RepoService) { }

  ngOnInit() {

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    // this.toggle.addEventListener('ionChange', (ev) => {
    //   console.log(ev);
    //   // document.body.classList.toggle('dark', ev.detail.checked);
    // });

    console.log('ngOn for side menu');
    //this.checkToggle(this.prefersDark.matches);

    this.storage.getKey('token').then(token => {
      // console.log('role from side menu', token)
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
    });
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
