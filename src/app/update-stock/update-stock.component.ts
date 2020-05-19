import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit, OnChanges {
@Input() getProductId: number;
@Input() getStockValue: number;
 color = '';
 updateStock : number;


 @Output() outputEmitObject = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  products = [{
    Id:  this.getProductId,
    Quantity: this.updateStock + this.getStockValue 
  }];

  ngOnChanges() {
    if(this.getStockValue <= 15) {
     this.color = 'red'
    }
     else {
     this.color = 'green'
     }
  }

  updateStockValue() {
 this.outputEmitObject.emit({Id: this.getProductId, updateStock: this.updateStock });
 this.updateStock = '';
  }

}
