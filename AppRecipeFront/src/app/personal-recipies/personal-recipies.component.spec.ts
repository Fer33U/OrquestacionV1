import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipiesComponent } from './personal-recipies.component';

describe('PersonalRecipiesComponent', () => {
  let component: PersonalRecipiesComponent;
  let fixture: ComponentFixture<PersonalRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalRecipiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
