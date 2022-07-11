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
    switch (event.key) {
        case 'ArrowUp':
        console.log('up')
        this.moveFocus(ArrowDirection.RIGHT).focus();
       break;
        case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
        case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
        case 'ArrowRight':
        console.log('up')
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }

  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
    ? items[items.length - 1]
    : items[0];
  }

}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
