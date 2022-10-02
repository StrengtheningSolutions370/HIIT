import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpWriteoffreasonComponent } from './help-writeoffreason.component';

describe('HelpWriteoffreasonComponent', () => {
  let component: HelpWriteoffreasonComponent;
  let fixture: ComponentFixture<HelpWriteoffreasonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWriteoffreasonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpWriteoffreasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
