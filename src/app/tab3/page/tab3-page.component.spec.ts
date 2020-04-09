import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab3PageComponent } from './tab3-page.component';

describe('Tab3PageComponent', () => {
  let component: Tab3PageComponent;
  let fixture: ComponentFixture<Tab3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3PageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
