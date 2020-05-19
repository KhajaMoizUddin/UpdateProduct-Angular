import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UpdateStockProject';
  products = [];
  updatedStock : any;

  ngOnInit() {
    this.products = this.getProducts();
  }

  captureResult(data) {
    debugger;
 this.updatedStock = this.products.find(this.findProducts, [data.Id]);
 this.updatedStock.Stock = this.updatedStock.Stock + data.updateStock;
  }

  findProducts(p) {
    return p.Productid === this[0];
  }
  getProducts() {
    return[
      {
        "Productid": 1,
        "Productname": 'Nike',
        "Price": 500,
        "Description": 'Nike Brand',
        "Stock": 30
      },
      {
        "Productid": 2,
        "Productname": 'Adidas',
        "Price": 600,
        "Description": 'Adidas Brand',
        "Stock": 40
      },
      {
        "Productid": 3,
        "Productname": 'UCB',
        "Price": 600,
        "Description": 'UCB Brand',
        "Stock": 10
      },
      {
        "Productid": 4,
        "Productname": 'Allen Solly',
        "Price": 1500,
        "Description": 'Allen Brand',
        "Stock": 14
      },
      {
        "Productid": 5,
        "Productname": 'PUMA',
        "Price": 500,
        "Description": 'PUMA Brand',
        "Stock": 18
      }
    ];
  }
}
