import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CursoComponent } from "./curso/curso.component";
import { AlunosModule } from "../alunos/alunos.module";

@NgModule({
  imports: [CommonModule, AlunosModule],
  declarations: [CursoComponent],
  exports: [CursoComponent],
})
export class CursosModule {}
