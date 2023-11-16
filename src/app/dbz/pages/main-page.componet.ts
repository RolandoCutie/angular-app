import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  //Este metodo se ejecutaria cuando se emita algun evento desde el hijo que este padre lo este escuchando
  //Aqui es donde vamos a guardar las cosas
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
