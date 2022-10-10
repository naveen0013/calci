import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquateComponent } from './equate/equate.component';
import { ResultHereComponent } from './equate/result-here/result-here.component';

const routes: Routes = [
  {path:"",component:EquateComponent,children:[{path:'',component:ResultHereComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
