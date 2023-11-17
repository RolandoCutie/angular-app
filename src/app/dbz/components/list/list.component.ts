import { first } from 'rxjs';
import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunck',
      power: 10,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
    console.log(id);
  }
}
