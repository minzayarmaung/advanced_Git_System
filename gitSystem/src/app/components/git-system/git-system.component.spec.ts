import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSystemComponent } from './git-system.component';

describe('GitSystemComponent', () => {
  let component: GitSystemComponent;
  let fixture: ComponentFixture<GitSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
