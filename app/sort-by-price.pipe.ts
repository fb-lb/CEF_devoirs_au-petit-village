import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByPrice',
    standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(figurines: any[], priceSorting: string): any[] {
    switch (priceSorting) {
      case 'ascendingOrder':
        return figurines.sort((a:any, b:any) => {return b.price - a.price});
    
      case 'descendingOrder':
        return figurines.sort((a:any, b:any) => {return a.price - b.price});

      default:
        return figurines;
    }
  }
}
