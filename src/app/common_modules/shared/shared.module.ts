import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[FlexLayoutModule, InfiniteScrollModule],
  declarations: []
})
export class SharedModule { }
