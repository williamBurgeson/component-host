import { Injectable } from '@angular/core';

@Injectable()
export class BuongiornoService {

  constructor() { }

  getMessage() {
    return 'il servizio di buongiorno dica "salve"!';
  }

}
