import { CommonModule } from '@angular/common';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    const mockRouter = {
        events: new Subject(),   // เอาไว้ subscribe ได้
        url: '/',
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [CommonModule, NavbarComponent],
            providers: [{ provide: Router, useValue: mockRouter }]
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should update currentTab based on router.url', () => {
        mockRouter.url = '/index';
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.componentInstance;
        (mockRouter.events as Subject<Event>).next(
            new NavigationEnd(1, '/index', '/index')
        );
        expect(app.currentTab).toBe('index');
    });

    it('should update currentTab based on router.url', () => {
        mockRouter.url = '/';
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.componentInstance;
        (mockRouter.events as Subject<Event>).next(
            new NavigationEnd(1, '/index', '/index')
        );
        expect(app.currentTab).toBe('index');
    });

    describe('navigateTo', () => {
        it('should navigate to the correct path', () => {
            const path = 'test-path';
            component.navigateTo(path);
            expect(mockRouter.navigate).toHaveBeenCalledWith([`/${path}`]);
        });
    })
});
