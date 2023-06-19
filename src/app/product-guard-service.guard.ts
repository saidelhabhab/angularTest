import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './services/users.service';

export const productGuardServiceGuard: CanActivateFn = (route, state) => {



  console.log("OnlyLoggedInUsers Guard");

  if (inject(UsersService).isLoggedIn()) {
    return true;
  }else {
    window.alert("You are not logged in");
    inject(Router).navigate(['/'],{
      queryParams: {
        returnUrl: state.url}
    });
    return false;
  }


};
