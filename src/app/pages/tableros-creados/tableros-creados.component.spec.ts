import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerosCreadosComponent } from './tableros-creados.component';

describe('TablerosCreadosComponent', () => {
  let component: TablerosCreadosComponent;
  let fixture: ComponentFixture<TablerosCreadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerosCreadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerosCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
