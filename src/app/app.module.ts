import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarTileComponent} from './car-tiles/car-tile/car-tile.component';
import {MessageComponent} from './message/message.component';
import {HeaderComponent} from './header/header.component';
import {MainContentComponent} from './main-content/main-content.component';
import {CarTilesComponent} from './car-tiles/car-tiles.component';
import {FooterComponent} from './footer/footer.component';
import {AdminComponent} from './admin/admin.component';
import {AppRoutingModule} from "./app-routing.module";
import {CarListComponent} from './admin/car-list/car-list.component';
import {CarDetailsComponent} from './admin/car-details/car-details.component';
import {CustomerListComponent} from './admin/customer-list/customer-list.component';
import {RentalHistoryComponent} from './admin/rental-history/rental-history.component';
import {CarDetailsEditComponent} from './admin/car-details-edit/car-details-edit.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    MessageComponent,
    HeaderComponent,
    MainContentComponent,
    CarTilesComponent,
    FooterComponent,
    AdminComponent,
    CarListComponent,
    CarDetailsComponent,
    CustomerListComponent,
    RentalHistoryComponent,
    CarDetailsEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
