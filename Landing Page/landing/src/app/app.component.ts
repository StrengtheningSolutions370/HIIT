import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing';

  navbarOpen = false;

  constructor() {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  login() {
    window.open('https://ionic.d3u8esycr52y6q.amplifyapp.com/login')
  }

  signup() {
    window.open('https://ionic.d3u8esycr52y6q.amplifyapp.com/login/signup')
  }

}
