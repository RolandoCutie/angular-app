import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  public name: string = 'IronMan';
  public age: number = 2;

  get capitalazedName(): string {
    return this.name.toUpperCase();
  }

  heroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 23;
  }
  resetForm() {
    this.name = 'IronMan';
    this.age = 2;
  }
}
