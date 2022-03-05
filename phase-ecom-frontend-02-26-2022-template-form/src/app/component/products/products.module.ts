import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
