import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import Fuse from 'fuse.js'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  users : any[] = [];
  usersOriginal : any[] = [];

  loading = true;
  noresults = false;

  constructor(private repo : RepoService) { }

  ngOnInit() {

    this.repo.getAllClients().subscribe(res => {
      res.forEach((el : any) => {
        const temp = {
          ...el.client,
          ...el.user,
        }
        this.users.push(temp);
        this.usersOriginal.push(temp);
      })
      console.log(this.users);
      this.loading = false;
      if (this.users.length == 0) {
        this.noresults = true;
      }
    }),
    err => {
      console.log(err);
    }

  }

  searchUser(event : string) {
    const term = event;

    this.noresults = false;

    if (term == '' || term == null) {
      this.users = this.usersOriginal;
      if (this.users.length == 0) {
        this.noresults = true;
      }
      return;
    }

    const hits = new Fuse(this.usersOriginal, {
      keys: ['firstName', 'lastName', 'phoneNumber', 'email'],
    })
    .search(term);

    if (hits.length == 0) {
      this.noresults = true;
      return;
    }

    this.users = [];
    hits.map((el : any) => {
      this.users.push(el.item);
    });

  }

  phoneFormat(number : string) : string {
    return `(${number.substring(0, 3)}) ${number.substring(3, 6)} ${number.substring(6, 10)}`;
  }

}
