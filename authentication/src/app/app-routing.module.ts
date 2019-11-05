import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterListComponent } from './roster-list/roster-list.component';

const routes: Routes = [{
  path: '',
  component: RosterListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
