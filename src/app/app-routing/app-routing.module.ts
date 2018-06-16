import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponentComponent } from '../home-component/home-component.component';
import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      { enableTracing: true })

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
