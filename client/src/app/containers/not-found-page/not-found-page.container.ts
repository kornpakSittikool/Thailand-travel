import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'not-found-page-container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found-page.container.html',
    styleUrls: ['not-found-page.container.scss'],
})
export class NotFoundPageContainer implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        // Any initialization logic can go here
    }

    goToHome() {
        this.router.navigate(['/index']);
    }


}
