import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

}
