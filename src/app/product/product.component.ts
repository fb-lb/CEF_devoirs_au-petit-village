import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    standalone: false
})
export class ProductComponent {

  figurine: any;
  figurineId: any;
  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.figurineId = this.activatedRoute.snapshot.paramMap.get('id');
    this.figurine = this.service.productsDatabase.find(x => x.id == this.figurineId);
  }

  form = new FormGroup({
    quantity: new FormControl(1, [Validators.min(1), Validators.max(99)])
  })

  sendForm() {
    alert("Merci, nous avons bien ajouté votre commande à votre panier");
    this.form.reset({ quantity: 1 });
  }
}
