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
  subsChildren : any;

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
    this.subsChildren = document.getElementsByClassName('subChild');

  }

  searchHelp(term : string) {
    
    this.showAll();

    if (term == '') return;

    let firstParent : any;
    let firstChild : any;

    let openedParent = false;
    let openedChild = false;

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
        ignoreLocation: true,
        // minMatchCharLength: 5
      }).search(term);

      if (hit.length == 0) {
        this.hide(sub);
      } else {

        //toggle the first parent:
        if (!openedParent) {
          // this.toggleParentAccordian(sub.getAttribute('value'));
          firstParent = sub;
          openedParent = true;
        }

        //filter children:
        let child = sub.querySelector('ion-accordion-group')
        if (child == null) {
          continue;
        }

        child = child.querySelectorAll('ion-accordion');

        for (let j = 0; j < child.length; j++) {
          //console.log(child[j].textContent);

          const subChild = child[j];
          const subText = [{
            text: subChild.textContent
          }];
          // console.log(subText[0].text)

          const hitChild = new Fuse(subText, {
            keys: [
              'text'
            ],
            findAllMatches: true,
            threshold: 0.1,
            ignoreLocation: true,
          }).search(term);

          if (hitChild.length == 0) {
            this.hide(subChild);
          } else {
            if (!openedChild) {
              firstChild = subChild;
              openedChild = true;
            }
          }

        };

      }
      
    }

    //parent made a match:
    if (!openedChild) {
      this.toggleParentAccordian(firstParent.getAttribute('value'));
    } else {
      this.toggleChildAccordian(firstParent.getAttribute('value'), firstChild.getAttribute('value'));
    }
    console.log(firstChild)

  }

  showAll() {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].style.display = 'block';
    }
    for (let i = 0; i < this.subsChildren.length; i++) {
      this.subsChildren[i].style.display = 'block';
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
