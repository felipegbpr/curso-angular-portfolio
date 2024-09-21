import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      width: '100px',
      height: '51px',
      description: '<p>Projeto web que engloba uma aplicação para gerenciamento de tarefas. Tem como principais tecnologias de desenvolvimento Angular, TypeScript, SCSS.</p>',
      links: [
        {
          name: 'Link do projeto',
          href: 'https://felipegbpr.github.io/angular-lista-de-tarefas/'
        }
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
