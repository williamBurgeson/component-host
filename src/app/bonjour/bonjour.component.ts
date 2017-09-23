import { Component, OnInit } from '@angular/core';

import { BuongiornoService } from '../buongiorno/buongiorno.service'; 

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {

  constructor(private _buongiorno: BuongiornoService) { }

  ngOnInit() {
    this.message = this._buongiorno.getMessage();
  }

  message = '';
}
