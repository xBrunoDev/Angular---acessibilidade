import { ContentChild, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-directive-item.directive';

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  constructor() { }

  @ContentChild(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener ('keyup', ['$event'])
  public mangeKeys(event: KeyboardEvent): void {

  }

}
