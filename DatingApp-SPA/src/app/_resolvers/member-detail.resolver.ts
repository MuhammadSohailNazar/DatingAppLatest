import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Injectable()
export class MemberDetailResolver implements Resolve<User | null> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    return this.userService.getUser(+route.params['id']).pipe(
      catchError((): Observable<null> => {
        this.alertify.error('Problem reteriving data.');
        this.router.navigate(['/members']);

        return of(null);
      })
    );
  }
}
