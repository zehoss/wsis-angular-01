import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarTileComponent} from './car-tile/car-tile.component';
import {MessageComponent} from './message/message.component';
import {HeaderComponent} from './header/header.component';
import {MainContentComponent} from './main-content/main-content.component';
import {CarTilesComponent} from './car-tiles/car-tiles.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    MessageComponent,
    HeaderComponent,
    MainContentComponent,
    CarTilesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
