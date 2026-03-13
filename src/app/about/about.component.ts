import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    standalone: false
})
export class AboutComponent {

  aboutParagraphs :any;
  constructor (private productsService: ProductsService) {}
  ngOnInit() :void{
    this.aboutParagraphs = this.productsService.aboutDatabase;
  }
}
