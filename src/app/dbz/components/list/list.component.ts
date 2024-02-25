import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  
  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter( id?: string ): void {
    // TODO: emitir el ID del personaje
    if ( !id ) return;
    this.onDeleteId.emit(id);
  }
}
