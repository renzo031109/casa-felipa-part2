import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFileListComponent } from './master-file-list.component';

describe('MasterFileListComponent', () => {
  let component: MasterFileListComponent;
  let fixture: ComponentFixture<MasterFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
