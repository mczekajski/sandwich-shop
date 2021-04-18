import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SandwichService } from "../sandwich.service";

@Component({
  selector: "wsb-sandwich-details",
  templateUrl: "./sandwich-details.component.html",
  styles: [],
})
export class SandwichDetailsComponent {
  public sandwichId = this.activatedRoute.snapshot.params.sandwichId;

  public sandwichDetails = this.sandwichService.getSandwich(this.sandwichId);

  constructor(
    private activatedRoute: ActivatedRoute,
    private sandwichService: SandwichService
  ) {}
}
