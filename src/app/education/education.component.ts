import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationCourses: Array<any> = [];

  ngOnInit(): void {
    let education1 = {
      fecha: "2019-2022",
      titulo: "Técnico en programación",
      institucion: "CBTIS 142"
    };

    let education2 = {
      fecha: "2019-2022",
      titulo: "Certificado 'Desarrollo en Java'",
      institucion: "UDEMY"
    }

    this.educationCourses.push(education1);
    this.educationCourses.push(education2);
    console.log(this.educationCourses);
  }
}
