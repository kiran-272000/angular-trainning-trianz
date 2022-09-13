import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/layouts/login/login.component';
import { RegisterComponent } from './components/layouts/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  providers:[AuthService],
})
export class UserModule { }
