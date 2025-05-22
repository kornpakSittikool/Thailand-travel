import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

import { AppComponent } from './app.component';
import { NotFoundPageContainer } from './containers/not-found-page/not-found-page.container';
import { MockRouter } from './interfaces/router.interface';
import { NavbarComponent } from './shared/components/navbar/navbar.component';




describe('AppComponent', () => {
  let mockRouterEvents = new Subject<Event>();
  let mockRouter: MockRouter
  const mockRouterNavigationEnd = new Subject<NavigationEnd>();
  beforeEach(async () => {
    mockRouterEvents = new Subject<Event>();
    mockRouter = {
      events: mockRouterEvents.asObservable(),
      routerState: {
        root: {
          firstChild: null,
          snapshot: {
            data: {
              hideNavbar: true
            }
          }
        }
      }
    }
    await TestBed.configureTestingModule({
      imports: [AppComponent, NavbarComponent, RouterOutlet, NotFoundPageContainer],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockRouterNavigationEnd },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should hide navbar when hideNavbar is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hideNavbar).toBe(false);
    mockRouter.routerState.root.firstChild = {
      snapshot: {
        data: {
          hideNavbar: true
        }
      },
      firstChild: null
    }
    const navEnd = new NavigationEnd(1, '/**', '/not-found');
    mockRouterEvents.next(navEnd);
    expect(navEnd.id).toBe(1);
    expect(navEnd.url).toBe('/**');
    expect(navEnd.urlAfterRedirects).toBe('/not-found');
    expect(app.hideNavbar).toBeTruthy();
  });
});
