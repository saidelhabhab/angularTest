import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { TranslateModule } from '@ngx-translate/core';
import { MainService } from '../services/main.service';
import { UsersService } from '../services/users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UsersModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    MainService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
  ],
})
export class PagesModule { }
