import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingListComponent } from './building-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BuildingListComponent', () => {
  let component: BuildingListComponent;
  let fixture: ComponentFixture<BuildingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
