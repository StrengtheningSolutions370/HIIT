import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { StoreService } from 'src/app/services/storage/store.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  @ViewChild('parentAccordian', { static: true }) accordionGroup: IonAccordionGroup;
  id = '';
  item = '';

  client = false;
  member = false;
  admin = false;
  superuser = false;
  trainer = false;
  role = '';

  screenID = 0;

  subs : any;

  constructor(private route : ActivatedRoute, private storage : StoreService) { }

  ionViewDidEnter() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.route.snapshot.paramMap.get('item');
    console.log(this.id, '/', this.item);
    this.storage.getKey('role').then(role => {
      this.role = role;
      console.log(this.role);
      if (this.role == 'client')
        this.client = true;
      if (this.role == 'member')
        this.member = true;
      if (this.role == 'admin' || this.role == 'superuser') {
        this.client = true;
        this.member = true;
        this.admin = true;
        this.superuser = true;
        this.trainer = true;
      }
      if (this.role == 'trainer')
        this.trainer = true;
      if (this.id == null) return;
      if (this.item == null)
        this.toggleParentAccordian(this.id);
      else
        this.toggleChildAccordian(this.id, this.item);
    });

    this.subs = document.getElementsByClassName('sub');

  }

  searchHelp(term : string) {
    
    this.showAll();

    if (term == '') return;

    for (let i = 0; i < this.subs.length; i++) {
      
      const sub = this.subs[i];
      const text = [{
        text: sub.textContent
      }];
      console.log(text[0].text)

      const hit = new Fuse(text, {
        keys: [
          'text'
        ],
        findAllMatches: true,
        threshold: 0.1,
        ignoreLocation: true
      }).search(term);

      console.log('hide', hit)
      if (hit.length == 0) {
        this.hide(sub);
      } else {

        console.log(sub);

      }

      //parent made a match:


    }

  }

  showAll() {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].style.display = 'block';
    }
  }

  hide(el : any) {
    el.style.display = 'none';
  }

  getId() {
    return ++this.screenID;
  }

  toggleParentAccordian(id : any) {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === id) {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = id;
    }
    console.log('toggleParentAccordian', this.id);
  }

  toggleChildAccordian(id : any, item : any) {
    this.toggleParentAccordian(id);
    //toggle child
    const child : any = document.getElementById(id);
    child.value = item;
  }

  ngOnInit() {
  }

}
