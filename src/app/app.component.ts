import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // cursos = [
  //   { url: "./../assets/img/online-cursos.jpg", description: "Administração" },
  //   { url: "./../assets/img/online-cursos2.jpg", description: "Eletrônica" },
  //   { url: "./../assets/img/online-cursos.jpg", description: "Full Stack" },
  //   { url: "./../assets/img/online-cursos2.jpg", description: "Eletrica" },
  //   { url: "./../assets/img/online-cursos.jpg", description: "Administração" },
  //   { url: "./../assets/img/online-cursos2.jpg", description: "Back End" },
  // ];

  cursos: Object[] = [];

  constructor(http: HttpClient) {
    http
      .get<Object[]>(`http://localhost:3000/flavio/photos`)
      .subscribe((photos) => {
        this.cursos = photos;
      });
  }
}
