import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pruduct1Component } from './pruduct1/pruduct1.component';
import { ProductService } from './shared/product.service';
import { Pruduct2Component } from './pruduct2/pruduct2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Pruduct1Component,
    Pruduct2Component
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ProductService,LoggerService],
  providers: [
     {
      provide: ProductService,
      useFactory: (logger: LoggerService,appConfig)  => {
        // let logger = new LoggerService();
        // let isDev = Math.random() > 0.5;
        if(appConfig.isDev) {
          return new ProductService();
        } else {
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService,"APP_CONFIG" ]
     },
     LoggerService ,
     { provide:"APP_CONFIG", useValue: {isDev: true} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
