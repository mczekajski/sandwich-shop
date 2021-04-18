import { Routes } from "@angular/router";
import { SandwichDetailsComponent } from "./sandwich-details/sandwich-details.component";
import { SandwichFormComponent } from "./sandwich-form/sandwich-form.component";
import { SandwichListComponent } from "./sandwich-list/sandwich-list.component";

// export const sandwichRoutes: Route[] = [
export const sandwichRoutes: Routes = [
  { path: "sandwiches", component: SandwichListComponent },
  { path: "sandwiches/form", component: SandwichFormComponent },
  { path: "sandwiches/:sandwichId", component: SandwichDetailsComponent },
];
