import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientsDialogComponent } from './add-patients-dialog.component';

describe('AddPatientsDialogComponent', () => {
  let component: AddPatientsDialogComponent;
  let fixture: ComponentFixture<AddPatientsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
