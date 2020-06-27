import { Injectable } from "@angular/core";

const global = window as any;
global.instanciasA = 0;

@Injectable()
export class Ej16AService {
  constructor(){
    global.instanciasA++;
    console.log('instanciasA', global.instanciasA);
  }
}
