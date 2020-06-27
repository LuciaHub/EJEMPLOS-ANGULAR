import { NgModule } from "@angular/core";
import { FooComponent } from './foo.component';
import { HTTPService } from './http.service';
import { URL_PPROVIDER_TOKEN, urlValue } from './url.provider';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent
  ],
  providers: [
    HTTPService,
    ConfigService,
    { provide: URL_PPROVIDER_TOKEN, useValue: urlValue }
  ]
})
export class ServicesModule { }
