import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  name: string = 'Daniel';
  gender: 'male'|'female' = 'male';
  invitationMap= {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Javier';
    this.gender = 'male';
  }

  // i18nPlural
  clients: string[] =  ['Daniel', 'Pedro', 'Fernando', 'Javier'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Daniel',
    age: 21,
    address: 'Mojados, Valladolid'
  };

  // Async Pipe
  /*myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value) )
  );

  promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa')
    }, 3500 )
  } )*/

}
