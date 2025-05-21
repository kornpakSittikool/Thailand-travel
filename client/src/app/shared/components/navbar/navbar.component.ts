import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
    selector: 'navbar-component',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.scss',

})
export class NavbarComponent implements OnInit {
    currentTab = 'index';
    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            const url = this.router.url.split('?')[0];
            this.currentTab = url === '/' ? 'index' : url.slice(1);
        });
    }

    ngOnInit() {
        // console.log('NavbarComponent initialized');
    }

    navigateTo(path: string) {
        this.router.navigate([`/${path}`]);
    }


}
