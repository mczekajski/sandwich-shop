import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SandwichFormComponent } from "./sandwich-form/sandwich-form.component";
import { SandwichListComponent } from "./sandwich-list/sandwich-list.component";
import { SandwichItemComponent } from "./sandwich-item/sandwich-item.component";
import { SandwichDetailsComponent } from "./sandwich-details/sandwich-details.component";
import { sandwichRoutes } from "./sandwich.routes";

@NgModule({
  declarations: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichItemComponent,
    SandwichDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(sandwichRoutes),
  ],
  exports: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichItemComponent,
    SandwichDetailsComponent,
  ],
})
export class SandwichModule {}
