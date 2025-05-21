import { Routes } from '@angular/router';

import { BookATripContainer } from './containers/book-a-trip/book-a-trip.container';
import { IndexContainer } from './containers/index/index.container';
import { NotFoundPageContainer } from './containers/not-found-page/not-found-page.container';



export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' }, // เข้ามาหน้าแรก redirect ไป index
    { path: 'index', component: IndexContainer },
    { path: 'book-a-trip', component: BookATripContainer },
    { path: 'not-found', component: NotFoundPageContainer, data: { hideNavbar: true } },
    { path: '**', redirectTo: 'not-found' },
];
