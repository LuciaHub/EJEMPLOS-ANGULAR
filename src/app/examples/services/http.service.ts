import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class HTTPService {
  constructor(private config: ConfigService){}
  get(){
    return 123;
  }
}
