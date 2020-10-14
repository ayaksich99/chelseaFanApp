import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixtureComponent } from './fixture/fixture.component';
import { GenericGuardGuard } from './guards/generic-guard.guard';
import { UserGuardGuard } from './guards/user-guard.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [GenericGuardGuard]},
  {path: 'signup', component: SignUpComponent, canActivate: [GenericGuardGuard]},
  {path: 'home-page', component: HomePageComponent, canActivate: [UserGuardGuard]},
  {path: 'fixture', component: FixtureComponent, canActivate: [UserGuardGuard]},
  {path: '**', redirectTo: '/login'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
