import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private totalItems=100;

  getItems(page=1,itemsPerPage=10):Observable<any>{
   const startIndex=(page-1)*itemsPerPage;
   const endIndex=startIndex+itemsPerPage;
   const items=[];
   for(let i=startIndex;i<endIndex;i++){
    if(i<this.totalItems){
      items.push({Sno:`${i+1}` ,name:`Name ${i+1}`, age:`${i+1}`,});
    }
   }
   return of(items).pipe(delay(500));
  }
}
