import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatBadgeModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatBadgeModule],
})
export class MaterialModule {}
