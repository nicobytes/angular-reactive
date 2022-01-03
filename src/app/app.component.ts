import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer: MatDrawer | undefined;
  myCart$ = this.store.myCart$;

  constructor(
    private store: StoreService
  ) { }

  onToggleCart() {
    this.drawer?.toggle();
  }
}
