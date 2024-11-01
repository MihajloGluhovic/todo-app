import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
