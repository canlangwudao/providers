import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }
  logOut(message: string){
    console.log('message');
  }

}
