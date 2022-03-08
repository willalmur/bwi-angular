import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, CanActivate } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { ProcessComponent } from './process/process.component';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { RefreshSuccessComponent } from './refresh-success/refresh-success.component';
import { RefreshComponent } from './refresh/refresh.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CookieService } from "ngx-cookie-service";
import { ShareStateService } from './services/share-state.service';

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor( private router: Router, private cookies: CookieService, private shareState: ShareStateService) {};
  canActivate() {
    if (this.shareState.authenticationResult.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'refresh-config',
    component: RefreshComponent,
    canActivate: [ OnlyLoggedInUsersGuard ],
  },
  {
    path: 'refresh-success',
    component: RefreshSuccessComponent,
    canActivate: [ OnlyLoggedInUsersGuard ],
  },
  {
    path: 'process',
    component: ProcessComponent,
    canActivate: [ OnlyLoggedInUsersGuard ],
    children:[
      {
        path: 'check-list',
        component: CheckListComponent,
        canActivate: [ OnlyLoggedInUsersGuard ],
      },
      {
        path: 'progress-list',
        component: ProgressListComponent,
        canActivate: [ OnlyLoggedInUsersGuard ],
      },
      {
        path: 'item-list',
        component: ItemListComponent,
        canActivate: [ OnlyLoggedInUsersGuard ],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
