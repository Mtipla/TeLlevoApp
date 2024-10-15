import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSinAPage } from './home-sin-a.page';

describe('HomeSinAPage', () => {
  let component: HomeSinAPage;
  let fixture: ComponentFixture<HomeSinAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSinAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
