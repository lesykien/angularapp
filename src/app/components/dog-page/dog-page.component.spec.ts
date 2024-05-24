import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPageComponent } from './dog-page.component';

describe('DogPageComponent', () => {
  let component: DogPageComponent;
  let fixture: ComponentFixture<DogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
