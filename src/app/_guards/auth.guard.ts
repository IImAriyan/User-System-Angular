import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService).check("?userlogindToSite?");
  if (cookie) {
    return true;
  }else {
    return inject(Router).navigate(['authentication/login']);
  }
};
