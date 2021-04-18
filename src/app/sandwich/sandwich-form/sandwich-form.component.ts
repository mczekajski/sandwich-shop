import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ingredient, Sauce } from "../sandwich";
import { SandwichService } from "../sandwich.service";

@Component({
  selector: "wsb-sandwich-form",
  templateUrl: "./sandwich-form.component.html",
  styleUrls: ["./sandwich-form.component.css"],
})
export class SandwichFormComponent implements OnInit {
  public sandwichForm: FormGroup;

  public showErrors: boolean = false;

  public sauces = [
    { label: "No sauce", value: Sauce.None },
    { label: "Barbaque sauce", value: Sauce.Barbaque },
    { label: "Hot sauce", value: Sauce.Hot },
    { label: "Mayonnaise sauce", value: Sauce.Mayo },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private sandwichService: SandwichService
  ) {}

  public ngOnInit(): void {
    this.sandwichForm = this.formBuilder.group({
      name: ["", Validators.minLength(5)],
      ingredients: this.formBuilder.group({
        [Ingredient.Lettuce]: false,
        [Ingredient.Chorizo]: false,
        [Ingredient.Ham]: false,
        [Ingredient.Cheese]: false,
        [Ingredient.Tomato]: false,
      }),
      sauce: Sauce.None,
      vege: false,
      price: [0, [Validators.min(0), Validators.max(20)]],
    });
  }

  public mapIngredients(ingredients) {
    // 1st METHOD
    // let selectedIngredients = [];

    // for (let key in ingredients) {
    //   const value = ingredients[key];

    //   if (value === true) {
    //     selectedIngredients.push(key);
    //   }
    // }

    // return selectedIngredients;

    // 2nd METHOD
    return Object.entries(ingredients) // -> [ ['lettuce', true], ['tomato', true], ['ham', false] ]
      .filter((entry) => entry[1]) // -> [ ['lettuce', true], ['tomato', true] ]
      .map((entry) => entry[0]); // -> ['lettuce', 'tomato']
  }

  public save(): void {
    this.showErrors = true;

    const formValue = this.sandwichForm.getRawValue();
    const sandwich = {
      ...formValue,
      ingredients: this.mapIngredients(formValue.ingredients),
    };

    if (this.sandwichForm.valid) {
      console.info("Wysyłam kanapkę...");
      this.sandwichService.postSandwich(sandwich).then((response) => {
        console.log("Kanapka zapisana!", response);
        this.showErrors = false;
        this.reset();
      });
    }
  }

  public reset(): void {
    this.sandwichForm.reset({
      name: "",
      ingredients: {
        [Ingredient.Lettuce]: false,
        [Ingredient.Chorizo]: false,
        [Ingredient.Ham]: false,
        [Ingredient.Cheese]: false,
        [Ingredient.Tomato]: false,
      },
      sauce: Sauce.None,
      vege: false,
      price: 0,
    });
  }
}
