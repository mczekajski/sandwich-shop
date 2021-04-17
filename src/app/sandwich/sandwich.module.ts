import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';

@NgModule({
  declarations: [
    SandwichFormComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    SandwichFormComponent
  ],
})
export class SandwichModule {}
