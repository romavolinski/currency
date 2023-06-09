import {Component, Input, OnChanges} from '@angular/core';
import {Currency} from "../../models/currency.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{

  @Input() currencies: Currency[] = []

  defaultCurrencies = ['USD','EUR','GBP','PLN','CNY']
  headerCurrencies : Currency[] = []
  ngOnChanges() {if (this.currencies.length)
    this.headerCurrencies = this.currencies.filter(el=> this.defaultCurrencies.includes(el.cc))
  }

}
