import { Event } from "@angular/router";
import { Observable } from "rxjs";

export interface MockActivatedRoute {
    snapshot: {
        data: {
            hideNavbar: boolean;
        };
    };
    firstChild: MockActivatedRoute | null;
}

export interface MockRouter {
    events: Observable<Event>;
    routerState: {
        root: MockActivatedRoute;
    };
}
