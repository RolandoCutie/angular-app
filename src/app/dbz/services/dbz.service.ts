import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  //Este metodo se ejecutaria cuando se emita algun evento desde el hijo que este padre lo este escuchando
  //Aqui es donde vamos a guardar las cosas
  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
