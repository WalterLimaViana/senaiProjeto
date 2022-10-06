import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-curso",
  templateUrl: "./curso.component.html",
  styleUrls: ["./curso.component.css"],
})
export class CursoComponent {
  // constructor() { }

  // ngOnInit() {}

  @Input() url = "";
  @Input() description = "";
}
