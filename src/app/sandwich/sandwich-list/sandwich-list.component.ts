import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styles: []
})
export class SandwichListComponent implements OnInit, OnDestroy {

  @ViewChild('queryInput') queryInputElement;

  public sandwiches = this.sandwichService.getSandwiches();

  constructor(private sandwichService: SandwichService) { }

  public find(query) {
    this.sandwiches = this.sandwichService.querySandwiches(query);
  }

  public find2() {
    const query = this.queryInputElement.nativeElement.value;
    this.sandwiches = this.sandwichService.querySandwiches(query);
  }

  public ngOnInit(): void {
    // ustawiamy setInterval
  }

  public ngAfterViewInit(): void {
    // TERAZ POLE queryInputElement JEST WYPEŁNIONE
    console.log(this.queryInputElement);
  }

  public ngOnDestroy(): void {
    // czyscimy setInterval
  }

}
