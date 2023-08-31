import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameTagComponent } from './name-tag/name-tag.component';

const routes: Routes = [
  { path: '', component: NameTagComponent },
  { path: 'name/name-tag', component: NameTagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
