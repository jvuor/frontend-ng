import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './blogs/bloglist.component';
import { HttpClientModule } from '@angular/common/http';
import { BloglistitemComponent } from './blogs/bloglistitem.component';

@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BloglistitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
