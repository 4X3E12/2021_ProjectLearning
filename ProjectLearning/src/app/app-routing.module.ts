import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { PostViewComponent } from './post-view/post-view.component';

const routes: Routes = [
  {path: 'create', component: CreateComponentComponent },
  {path: 'edit/:id', component: EditComponentComponent},
  {path: 'list', component: ListcomponentComponent},
  {path: 'postAvi/:id', component: PostViewComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
