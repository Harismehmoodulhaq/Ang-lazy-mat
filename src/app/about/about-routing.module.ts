import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }, 
{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
