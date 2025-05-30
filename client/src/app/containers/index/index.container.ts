import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'index-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'index.container.html',
  styleUrl: 'index.container.scss',
})
export class IndexContainer implements OnInit {
  showPreloader: boolean = true;
  parts = Array(12).fill(0);
  isShowNavbar: boolean = true;
  constructor() { }

  ngOnInit() {
    this.hidePreloaderAfterDelay();
  }

  async hidePreloaderAfterDelay() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.showPreloader = false;
    // this.isShowNavbar = true;
  }
}
