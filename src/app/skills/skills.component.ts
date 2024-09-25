import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {ProgressBarModule} from "primeng/progressbar";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgClass,
    ProgressBarModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  value: 10 | undefined;

}
