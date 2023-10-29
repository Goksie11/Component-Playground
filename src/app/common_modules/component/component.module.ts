import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollComponent } from 'src/app/component_model/infinity-scroll/infinity-scroll.component';
import { InterpolationSyntaxComponent } from 'src/app/component_model/interpolation-syntax/interpolation-syntax.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: [InfinityScrollComponent, InterpolationSyntaxComponent]
})
export class ComponentModule { }
