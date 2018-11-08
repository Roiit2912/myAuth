import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmeComponent } from './sme/sme.component';
import { LearnerComponent } from './learner/learner.component';

const routes: Routes = [
  {path: 'sme', component: SmeComponent },
  {path: 'learner', component: LearnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
