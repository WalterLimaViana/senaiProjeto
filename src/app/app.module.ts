import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AlunosModule } from "./alunos/alunos.module";
import { CursoComponent } from "./cursos/curso/curso.component";
import { CursosModule } from "./cursos/cursos.module";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AlunosModule, CursosModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
