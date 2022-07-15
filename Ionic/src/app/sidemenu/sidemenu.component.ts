import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Roles } from '../models/roles.enum';
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

    this.storage.getKey('token').then(token => {
      // console.log('role from side menu', token)
      this.repo.getUserRole(token).subscribe({
      next: (data : any) => {
        const r = data.role;
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

    })


  }

  logout() {
    this.auth.logout();
  }

}
