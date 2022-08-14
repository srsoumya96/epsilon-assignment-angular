import { Component, VERSION } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private prodService: ProductServiceService) {}
  productsList = [];
  sortCondition = {
    condition: '',
    order: 0,
  };
  ngOnInit() {
    this.prodService.getProducts().subscribe((res: any) => {
      this.productsList = res.cookies;
      console.log(this.productsList);
    });
  }
  sortTable(str: string) {
    if (this.sortCondition.condition != str) {
      this.sortCondition.condition = str;
      this.sortCondition.order = 1;
    } else {
      this.sortCondition.order *= -1;
    }
    this.sortData();
  }
  sortData() {
    let cond = this.sortCondition.condition;
    let order = this.sortCondition.order;

    this.productsList.sort((a, b) => {
      if (order == 1) {
        if (a[cond] >= b[cond]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (b[cond] >= a[cond]) {
          return 1;
        } else {
          return -1;
        }
      }
    });
  }
}
