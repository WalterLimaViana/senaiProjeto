import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoComponent } from "./aluno/aluno.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AlunoComponent],
  exports: [AlunoComponent],
})
export class AlunosModule {}
