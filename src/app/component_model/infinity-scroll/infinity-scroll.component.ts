import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { CdkScrollable, CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatPaginator } from '@angular/material/paginator';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll'; // Import InfiniteScrollDirective
import {MatTableModule} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.css'],
})
export class InfinityScrollComponent implements OnInit {



  ////////////////*************************** INFINITE SCROLL WITH TABLE ******************************/////////////////

                     ////////////////************* STEPS TO FOLLOW ***************//////////////////////


/*

  npm i ngx-infinite-scroll

  import { InfiniteScrollModule } from "ngx-infinite-scroll"; in to module

  For more options Please visit : https://www.npmjs.com/package/ngx-infinite-scroll

  Enjoy your infinite scroll

*/

////////////////////////////************************** THE END ********************************/////////////////////////

  title = 'scroll';
  displayedColumns: string[] = [ 'Sno',  'name', 'age'];
  dataSource :any;
  items:any
  isLoading=false;
  currentPage=1;
  itemsPerPage=10;

  toggleLoading = ()=>this.isLoading=!this.isLoading;

  // it will be called when this component gets initialized.
  loadData= ()=>{
    this.toggleLoading();
    this.dataService.getItems(this.currentPage,this.itemsPerPage).subscribe({
     next:(response: string[])=>this.items = response,
     error:(err: any)=>console.log(err),
     complete:()=>this.toggleLoading()
    })
  }

  // this method will be called on scrolling the page
  appendData= ()=>{
   this.toggleLoading();
   this.dataService.getItems(this.currentPage,this.itemsPerPage).subscribe({
    next:(response: any)=>this.items = [...this.items,...response],
    error:(err: any)=>console.log(err),
    complete:()=>this.toggleLoading()
   })
 }

  onScroll= ()=>{
   this.currentPage++;
   this.appendData();
  }


  constructor(private dataService:DataService) {
  }

 ngOnInit(): void {
   this.loadData();
 }

}
