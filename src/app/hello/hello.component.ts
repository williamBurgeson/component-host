import { Component, OnInit } from '@angular/core';

import { BuongiornoService } from '../buongiorno/buongiorno.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private _buongiorno: BuongiornoService) { }

  ngOnInit() {
    this.messageFromService = this._buongiorno.getMessage();
  }

  messageFromService = '';

}
