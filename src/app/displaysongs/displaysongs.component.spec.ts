import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DisplaysongsComponent } from './displaysongs.component';

describe('DisplaysongsComponent', () => {
  let component: DisplaysongsComponent;
  let fixture: ComponentFixture<DisplaysongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule],
      declarations: [ DisplaysongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('addMusic() should exists', () => {
    expect(component.addMusic).toBeTruthy();
  });

  it('myFunction() should exists', () => {
    expect(component.myFunction).toBeTruthy();
  });
 
});
