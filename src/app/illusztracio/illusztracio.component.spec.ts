import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllusztracioComponent } from './illusztracio.component';

describe('IllusztracioComponent', () => {
  let component: IllusztracioComponent;
  let fixture: ComponentFixture<IllusztracioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllusztracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllusztracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
