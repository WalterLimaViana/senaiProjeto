import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cursos = [
    { url: "./../assets/img/online-cursos.jpg", description: "Administração" },
    { url: "./../assets/img/online-cursos2.jpg", description: "Eletrônica" },
    { url: "./../assets/img/online-cursos.jpg", description: "Full Stack" },
    { url: "./../assets/img/online-cursos2.jpg", description: "Eletrica" },
    { url: "./../assets/img/online-cursos.jpg", description: "Administração" },
    { url: "./../assets/img/online-cursos2.jpg", description: "Back End" },
  ];
}
