import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AlunosModule } from "./alunos/alunos.module";
import { CursoComponent } from "./cursos/curso/curso.component";
import { CursosModule } from "./cursos/cursos.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AlunosModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
