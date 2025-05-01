import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { IndexContainer } from './index.container';

describe('IndexContainer', () => {
  let component: IndexContainer;
  let fixture: ComponentFixture<IndexContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IndexContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show preloader initially', () => {
    expect(component.showPreloader).toBeTrue();
  });

  it('should hide preloader after 3 seconds', fakeAsync(async () => {
    fixture.detectChanges();
    await component.hidePreloaderAfterDelay();
    tick(3000);
    fixture.detectChanges();
    expect(component.showPreloader).toBeFalse();
  }));

  it('should be parts 12', () => {
    expect(component.parts).toEqual(Array(12).fill(0));
  });
});
