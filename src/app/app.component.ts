import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {Currency} from "./models/currency.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currencies:Currency[] = []
  constructor(private currencyService:CurrencyService) {
  }
  ngOnInit() {
    this.currencyService.getCurrency()
      .subscribe(currencies =>
      this.currencies = currencies
      )

  }
}
