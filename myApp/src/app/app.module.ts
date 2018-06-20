import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';
import { HomeModule } from './home/home.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
