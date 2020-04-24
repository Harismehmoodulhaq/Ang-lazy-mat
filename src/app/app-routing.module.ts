import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', loadChildren:  () => import('./home/home.module').then(m => m.HomeModule) },
  {path: 'about', loadChildren:  () => import('./about/about.module').then(m => m.AboutModule) },
  {path: 'register',loadChildren:  () => import('./register/register.module').then(m => m.RegisterModule) },
  {path: 'login', loadChildren:  () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
