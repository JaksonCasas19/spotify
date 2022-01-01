import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login-page/login.component';

const routes: Routes = [
  {
    path:'login',//http://localhost:4200/auth/login
    component: LoginComponent
  },
  {
    path:'**', //Para redireccionar rutas
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
