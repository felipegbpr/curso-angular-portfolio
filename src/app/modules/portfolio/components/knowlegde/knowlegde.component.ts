import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowlegde',
  standalone: true,
  imports: [],
  templateUrl: './knowlegde.component.html',
  styleUrl: './knowlegde.component.scss'
})
export class KnowlegdeComponent {
  public arrayKnowlegde = signal([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de java'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento de spring'
    },
    {
      src: 'assets/icons/knowledge/database.svg',
      alt: 'Ícone de conhecimento de database'
    },
  ]);
}
