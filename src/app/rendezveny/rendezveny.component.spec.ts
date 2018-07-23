import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvenyComponent } from './rendezveny.component';

describe('RendezvenyComponent', () => {
  let component: RendezvenyComponent;
  let fixture: ComponentFixture<RendezvenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
