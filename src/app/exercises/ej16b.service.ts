import { Injectable } from "@angular/core";

const global = window as any;
global.instanciasB = 0;

@Injectable()
export class Ej16BService {
  constructor(){
    global.instanciasB++;
    console.log('instanciasB', global.instanciasB);
  }
}
