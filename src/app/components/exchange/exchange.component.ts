import {Component, Input, OnChanges} from '@angular/core';
import {Currency} from "../../models/currency.model";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnChanges {

  @Input() currencies: Currency[] = []

  UAHcurrency: Currency = {
    txt: "Українська гривня",
    rate: 1,
    cc: "UAH",
  }
  firstValue: number = 1;
  secondValue!: number;
  firstCurrency: Currency = this.UAHcurrency;
  secondCurrency: Currency = this.UAHcurrency;


  ngOnChanges() {
    if (this.currencies.length) {
      this.currencies = [this.UAHcurrency, ...this.currencies]
      this.secondCurrency = this.currencies.find(el => el.cc === 'USD') || this.UAHcurrency;
      this.computingSecondValue()
    }


  }

  computingSecondValue() {
    this.secondValue = Math.round((100 * this.firstValue * this.firstCurrency.rate) / this.secondCurrency.rate) / 100;
  }

  computingFirstValue() {
    this.firstValue = Math.round((100 * this.secondValue * this.secondCurrency.rate) / this.firstCurrency.rate) / 100;
  }
}
