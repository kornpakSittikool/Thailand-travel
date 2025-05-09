import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'navbar-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.scss',

})
export class NavbarComponent implements OnInit {

    constructor() { }
    @Input() isShow: boolean = false;
    opacityValue: number = 0;
    blurValue: number = 10;
    ngOnInit() {
        setTimeout(() => {
            this.isShow = true;
            this.animateContent();
        }, 3000);
    }

    animateContent() {

        setTimeout(() => {
            this.opacityValue = 1;
            this.blurValue = 0;
        }, 50);
    }
}
