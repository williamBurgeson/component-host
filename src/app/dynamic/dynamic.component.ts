import { 
  Component, 
  ComponentFactoryResolver,
  OnInit } from '@angular/core';

import { BonjourComponent } from '../bonjour/bonjour.component';
import { GutenTagComponent } from '../guten-tag/guten-tag.component';
import { HelloComponent } from '../hello/hello.component';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  components = [
    BonjourComponent,
    GutenTagComponent,
    HelloComponent 
  ];
  private _componentSelected = '';
  get componentSelected() {
    return this._componentSelected;
  }
  set componentSelected(val) {
    this._componentSelected = val;
  }
 
  constructor(
    private _resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

}
