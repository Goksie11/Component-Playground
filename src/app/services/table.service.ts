import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private data: any[] = [];

  constructor() {
    // Simulate loading data (replace with your actual data source)
    for (let i = 1; i <= 50; i++) {
      this.data.push({ id: i, name: `Item ${i}` });
    }
  }

  fetchData(): Observable<any[]> {
    // Simulate an API call or database query
    const newData = [];

    for (let i = this.data.length + 1; i <= this.data.length + 10; i++) {
      newData.push({ id: i, name: `Item ${i}` });
    }

    // Simulate a delay for loading
    return of(newData);
  }
}