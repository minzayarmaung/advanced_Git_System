import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFolderComponent } from './new-folder.component';

describe('NewFolderComponent', () => {
  let component: NewFolderComponent;
  let fixture: ComponentFixture<NewFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
