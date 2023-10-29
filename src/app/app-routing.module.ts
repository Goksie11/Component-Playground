import { InterpolationSyntaxComponent } from './component_model/interpolation-syntax/interpolation-syntax.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinityScrollComponent } from './component_model/infinity-scroll/infinity-scroll.component';

const routes: Routes = [
  {path:'infinity-scroll', component: InfinityScrollComponent},
  {path:'interpol-syntax', component: InterpolationSyntaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
