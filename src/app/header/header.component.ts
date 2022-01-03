import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StoreService } from './../store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleCart = new EventEmitter();
  myCart$ = this.store.myCart$;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
  }

  handleClickCart() {
    this.toggleCart.next();
  }

}
