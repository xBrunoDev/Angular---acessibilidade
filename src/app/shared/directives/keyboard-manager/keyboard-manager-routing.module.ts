import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyboardDirectiveItemDirective } from './keyboard-directive-item.directive';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   declarations: [
    "KeyboardDirectiveItemDirective"
  ]
})
export class KeyboardManagerRoutingModule { }
