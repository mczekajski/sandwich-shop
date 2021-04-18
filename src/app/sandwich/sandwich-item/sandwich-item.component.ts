import { Component, Input } from "@angular/core";
import { Sandwich } from "../sandwich";

@Component({
  selector: "wsb-sandwich-item",
  templateUrl: "./sandwich-item.component.html",
  styles: [],
})
export class SandwichItemComponent {
  @Input("data") sandwich: Sandwich;
}
