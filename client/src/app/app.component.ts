import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { NotFoundPageContainer } from './containers/not-found-page/not-found-page.container';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, RouterOutlet, NotFoundPageContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  hideNavbar = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideNavbar = this.shouldHideNavbar(this.router.routerState.root);
      });
  }

  shouldHideNavbar(route: ActivatedRoute): boolean {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['hideNavbar'] === true;
  }
}
