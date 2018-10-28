import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './blogs/bloglist.component';
import { HttpClientModule } from '@angular/common/http';
import { BloglistitemComponent } from './blogs/bloglistitem.component';
import { LoginFormComponent } from './login/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BloglistitemComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
