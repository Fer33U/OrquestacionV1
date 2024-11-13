import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRecipiesComponent } from './favorite-recipies.component';

describe('FavoriteRecipiesComponent', () => {
  let component: FavoriteRecipiesComponent;
  let fixture: ComponentFixture<FavoriteRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteRecipiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
