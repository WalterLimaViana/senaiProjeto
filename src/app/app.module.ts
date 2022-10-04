import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlunosModule } from "./alunos/alunos.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AlunosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
