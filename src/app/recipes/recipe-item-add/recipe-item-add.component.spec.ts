import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemAddComponent } from './recipe-item-add.component';

describe('RecipeItemAddComponent', () => {
  let component: RecipeItemAddComponent;
  let fixture: ComponentFixture<RecipeItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
