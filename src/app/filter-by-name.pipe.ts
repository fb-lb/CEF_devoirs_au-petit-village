import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from './products.service';

@Pipe({
    name: 'filterByName',
    standalone: false
})
export class FilterByNamePipe implements PipeTransform {

  constructor(private productsService: ProductsService) {}

  transform(figurines: any[], inputText: string): any[] {
    figurines = [...this.productsService.productsDatabase];
    for (let i=0; i < figurines.length; i++) {
      let name:string = figurines[i].name.toLowerCase();
      if(!name.includes(inputText)){
        figurines.splice(i, 1);
        i--;
      }
    } 
    return figurines;
  }
}
