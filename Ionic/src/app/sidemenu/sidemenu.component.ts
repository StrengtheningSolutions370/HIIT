import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Roles } from '../models/roles.enum';
import { AuthService } from '../services/authentication/auth.service';
import { RepoService } from '../services/repo.service';

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

  constructor(private auth: AuthService, private cookie : CookieService, private repo : RepoService) { }

  ngOnInit() {

    const token = this.cookie.get("token");
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
   

  }

  logout() {
    this.auth.logout();
  }

}
