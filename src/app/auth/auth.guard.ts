import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { map, take } from "rxjs";
import { AuthenticationService } from "./authentication.service";

export const authGuard = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    return authService.user.pipe(take(1),
        map(user => {
            const isAuth = !!user;
            if (isAuth) return true;
            return router.createUrlTree(['/auth']);
        })
    );
};