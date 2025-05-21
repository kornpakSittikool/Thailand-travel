import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'book-a-trip-container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'book-a-trip.container.html',
    styleUrls: ['book-a-trip.container.scss'],
})
export class BookATripContainer implements OnInit {
    constructor() { }

    ngOnInit() {

    }


}
