import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { Heroe_moduleComponent } from './heroes/components/heroe_module/heroe_module.component';
import { HeroeModule } from './heroes/heroe.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroeModule, CounterModule,DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
