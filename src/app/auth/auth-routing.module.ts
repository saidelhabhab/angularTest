import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: "",
  component: AuthLayoutComponent,

  children: [
    {
      path: "",
      component: LoginComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: 'forgot-password',
      component: ForgetPasswordComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
