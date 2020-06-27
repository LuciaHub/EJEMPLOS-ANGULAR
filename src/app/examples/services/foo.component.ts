import { Component, Inject } from '@angular/core';
import {ConfigService} from './config.service';
import { HTTPService } from './http.service';
import { URL_PPROVIDER_TOKEN } from './url.provider';

@Component({
  selector: 'ps-foo',
  templateUrl: './foo.component.html',
  // providers: [ConfigService]
})
export class FooComponent {
  constructor(public config: ConfigService, private httpService: HTTPService, @Inject(URL_PPROVIDER_TOKEN) private url: string) {
  }
}
