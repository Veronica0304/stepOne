import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
