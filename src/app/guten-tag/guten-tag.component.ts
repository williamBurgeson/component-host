import { Component, OnInit } from '@angular/core';

import { BuongiornoService } from '../buongiorno/buongiorno.service';

@Component({
  selector: 'app-guten-tag',
  templateUrl: './guten-tag.component.html',
  styleUrls: ['./guten-tag.component.css']
})
export class GutenTagComponent implements OnInit {

  constructor(private _buongiorno: BuongiornoService) { }

  ngOnInit() {
    this.message = this._buongiorno.getMessage();
  }

  message = '';
}
