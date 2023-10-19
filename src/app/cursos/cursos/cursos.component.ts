import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  //nomePortal: string = 'http://andorinea.com'

  nomePortal: string;

  cursos: string[] = ['React', 'Angular', 'HTML', 'CSS']

  constructor() {
    this.nomePortal = 'http://andorinea.com'
  }

  ngOnInit() {

  }

}
