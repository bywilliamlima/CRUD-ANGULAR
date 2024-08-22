import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfimationDialogComponent } from './comfimation-dialog.component';

describe('ComfimationDialogComponent', () => {
  let component: ComfimationDialogComponent;
  let fixture: ComponentFixture<ComfimationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfimationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
