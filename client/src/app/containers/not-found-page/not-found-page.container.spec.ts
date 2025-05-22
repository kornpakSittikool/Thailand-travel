import { CommonModule } from '@angular/common';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { Router } from '@angular/router';

import { NotFoundPageContainer } from './not-found-page.container';



describe('IndexContainer', () => {
    let component: NotFoundPageContainer;
    let fixture: ComponentFixture<NotFoundPageContainer>;
    const mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule],
            providers: [{ provide: Router, useValue: mockRouter }]
        }).compileComponents();

        fixture = TestBed.createComponent(NotFoundPageContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('goToHome', () => {
        it('should navigate to /index', () => {
            component.goToHome();
            expect(mockRouter.navigate).toHaveBeenCalledWith(['/index']);
        });
    })
});
