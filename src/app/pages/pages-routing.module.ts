import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLayoutComponent } from '../layouts/pages-layout/pages-layout.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from '../auth/forget-password/forget-password.component';
import { productGuardServiceGuard } from '../product-guard-service.guard';

const routes: Routes = [{
  path: "admin",
 // canActivate: [productGuardServiceGuard],
  component: PagesLayoutComponent,
  children: [
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
