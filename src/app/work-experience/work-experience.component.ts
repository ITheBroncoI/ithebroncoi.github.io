import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2020-2021",
      ubicacion: "Orizaba, Ver",
      puesto: "Developer Jr",
      empresa: "Fast Solutions",
      logros: [
        { descripcion: "Creación de un sistema de facturación en la nube de Google" },
        { descripcion: "Desarrollo de un ERP en un nodo de Azure" }
      ]
    };
    let work2 = {
      fecha: "2022-2023",
      ubicacion: "Cordoba, Ver",
      puesto: "Developer Jr",
      empresa: "Lazy Apps",
      logros: [
        { descripcion: "Participacion en el lanzamiento de 3 aplicaciones moviles" },
        { descripcion: "Participacion en actualizacion del proceso de la empresa" }
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
