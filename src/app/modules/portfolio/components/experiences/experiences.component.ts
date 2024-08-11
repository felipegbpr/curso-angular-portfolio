import { Component, signal } from '@angular/core';

// Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estg. Full Stack Developer',
        p: 'Modaonline'
      },
      text: '<p>Quisque mattis placerat libero quis ultricies. Nam viverra pulvinar sagittis. Nulla non odio et urna egestas tincidunt non nec magna.</p>',
    }
  ]);
}
