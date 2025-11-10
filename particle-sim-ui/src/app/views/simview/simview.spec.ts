import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simview } from './simview';

describe('Simview', () => {
  let component: Simview;
  let fixture: ComponentFixture<Simview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
