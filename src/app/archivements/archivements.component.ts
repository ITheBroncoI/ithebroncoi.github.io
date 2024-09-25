import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-archivements',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './archivements.component.html',
  styleUrl: './archivements.component.css'
})
export class ArchivementsComponent {
  archivements: Array<any> = [];

  ngOnInit(): void {
    let archivement1 = {
      titulo: "Medalla Hackathon ExpoCiencias Cuitlahuac",
      fecha: "2024",
    }

    let archivement2 = {
      titulo: "Certified Java Developer - Oracle",
      fecha: "2023",
    }

    let archivement3 = {
      titulo: "Front-End Developer - FreeCodeCamp",
      fecha: "2023",
    }

    this.archivements.push(archivement1);
    this.archivements.push(archivement2);
    this.archivements.push(archivement3);
  }
}
