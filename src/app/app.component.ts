import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
<<<<<<< HEAD
=======
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { EducationComponent } from "./education/education.component";
>>>>>>> dc6893e498244182f0f77da4dad9e95e4d53edd7

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycv';
}
