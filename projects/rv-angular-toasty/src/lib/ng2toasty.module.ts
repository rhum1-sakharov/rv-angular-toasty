import {ModuleWithProviders, NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {ToastyComponent} from './toasty.component';
import {ToastyConfig, ToastyService, toastyServiceFactory} from './toasty.service';
import {CommonModule} from '@angular/common';
import {SafeHtmlPipe} from './shared';

export let providers = [
  ToastyConfig,
  { provide: ToastyService, useFactory: toastyServiceFactory, deps: [ToastyConfig] }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToastComponent,
    ToastyComponent,
    SafeHtmlPipe
  ],
  exports: [
    ToastComponent,
    ToastyComponent,

  ],
  providers:providers
})
export class Ng2toastyModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2toastyModule,
      providers: providers
    };
  }

}
