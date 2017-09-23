import { 
  Component, 
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef } from '@angular/core';

import { BonjourComponent } from '../bonjour/bonjour.component';
import { GutenTagComponent } from '../guten-tag/guten-tag.component';
import { HelloComponent } from '../hello/hello.component';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @ViewChild('template', {read: ViewContainerRef}) _template: ViewContainerRef;
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
    this._template.clear();

    this._componentSelected = val;
    switch (val) {
      case 'Hello': this._componentTypeSelected = HelloComponent; break;
      case 'Bonjour': this._componentTypeSelected = BonjourComponent; break;
      case 'GutenTag': this._componentTypeSelected = GutenTagComponent; break;
      default: this._componentTypeSelected = null;
    }

    if (this._componentTypeSelected == null) {
      this.componentInstance = null;
      return;
    }
    this.setComponent();
  }
  private _componentTypeSelected: any | null = null;

  componentInstance: any = null;
 
  constructor(
    private _resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  setComponent() {
    let componentFactory = 
      this._resolver.resolveComponentFactory(this._componentTypeSelected);

    let componentRef = this._template.createComponent(componentFactory);

    this.componentInstance = componentRef.instance;
  }

}
