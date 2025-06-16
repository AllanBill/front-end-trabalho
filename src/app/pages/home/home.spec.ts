import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';  // ← caminho relativo ao .spec.ts

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]  // ← se for standalone, precisa estar em imports
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
