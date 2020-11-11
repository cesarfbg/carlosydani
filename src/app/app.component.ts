import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Timers
  one = false;
  two = false;
  three = false;
  four = false;
  five = false;
  six = false;
  seven = false;

  name: any;
  number: any;
  url: string;
  date = '13 de Diciembre de 2020';
  time = '05:00pm';
  address = 'el Restaurante Chalet Suizo Usaquén - Calle 118 #5-51 - Bogotá D.C';

  constructor( @Inject(DOCUMENT) document: any ) {

    this.url = document.location.href.split('#').pop();
    try {
      this.name = this.listaDeInvitados.find( invitado => invitado.url === this.url ).name;
      this.number = `(${this.listaDeInvitados.find( invitado => invitado.url === this.url ).number})`;
    } catch {
      this.name = ' Invitado no existe';
      this.number = ``;
    }

    setTimeout(() => {
      this.one = true;
    }, 1000);
    setTimeout(() => {
      this.two = true;
    }, 2000);
    setTimeout(() => {
      this.three = true;
    }, 3000);
    setTimeout(() => {
      this.four = true;
    }, 6000);
    setTimeout(() => {
      this.five = true;
    }, 7000);
    setTimeout(() => {
      this.six = true;
    }, 8000);
    setTimeout(() => {
      this.seven = true;
    }, 9000);
  }

  listaDeInvitados = [
    {
      name: 'Familia Blanco Gonzalez',
      number: '3',
      url: 'blanco-gonzalez'
    },
    {
      name: 'Familia Perez Guerra',
      number: '2',
      url: 'perez-guerra'
    },
    {
      name: 'Familia Arvelo Perez',
      number: '3',
      url: 'arvelo-perez'
    },
    {
      name: 'Familia Rodriguez Perez',
      number: '3',
      url: 'rodriguez-perez'
    },
    {
      name: 'Familia Blanco Alvarez',
      number: '2',
      url: 'blanco-alvarez'
    },
    {
      name: 'Familia Blanco Fernandez',
      number: '2',
      url: 'blanco-fernandez'
    },
    {
      name: 'Cesar Augusto Blanco',
      number: '1',
      url: 'cesar-augusto-blanco'
    },
    {
      name: 'Francisca Gonzalez',
      number: '1',
      url: 'francisca-gonzalez'
    },
    {
      name: 'Walter Alvarez',
      number: '1',
      url: 'walter-alvarez'
    },
    {
      name: 'Familia Tarazona Hortua',
      number: '2',
      url: 'tarazona-hortua'
    },
    {
      name: 'Familia Contreras Canizalez',
      number: '4',
      url: 'contreras-canizalez'
    },
    {
      name: 'Jesus Rodriguez',
      number: '2',
      url: 'jesusrodriguez'
    },
    {
      name: 'Christian Feo y Alejandra Mejias',
      number: '2',
      url: 'christianyalejandra'
    },
    {
      name: 'Jose Silva',
      number: '1',
      url: 'josesilva'
    },
    {
      name: 'Familia Casadiego',
      number: '2',
      url: 'blanco-casadiego'
    },
    {
      name: 'Jorge Duarte Alvarez',
      number: '2',
      url: 'jorge-duarte'
    },
    {
      name: 'Yaru Torres',
      number: '1',
      url: 'yaru-torres'
    },
    {
      name: 'Milagro Guerra',
      number: '1',
      url: 'milagro-guerra'
    },
    {
      name: 'Familia Pastoral',
      number: '2',
      url: 'familia-pastoral'
    },
    {
      name: 'Carlos Valderrama',
      number: '1',
      url: 'carlos-valderrama'
    },
    {
      name: 'Familia Bocanegra Bernal',
      number: '2',
      url: 'bocanegra-bernal'
    },
    {
      name: 'Familia Pena Rodriguez',
      number: '2',
      url: 'pena-rodriguez'
    },
    {
      name: 'Nelson Escobar',
      number: '1',
      url: 'nelson-escobar'
    },
    {
      name: 'Joseph Barreto y Robert Arellano',
      number: '2',
      url: 'josephyrobert'
    },
    {
      name: 'Jhon Enciso',
      number: '1',
      url: 'jhon-enciso'
    },
    {
      name: 'Ivan Polo',
      number: '1',
      url: 'ivan-polo'
    },
    {
      name: 'Harleidon Rocha y Cindy Buitrago',
      number: '2',
      url: 'harly-cindy'
    },
    {
      name: 'Jose Avila',
      number: '1',
      url: 'jose-avila'
    },
    {
      name: 'Erika Farieta',
      number: '1',
      url: 'erika-farieta'
    },
    {
      name: 'Manuela Tello',
      number: '1',
      url: 'manuela-tello'
    },
    {
      name: 'Angie Parra',
      number: '1',
      url: 'angie-parra'
    },
    {
      name: 'Karen Martin',
      number: '1',
      url: 'karen-martin'
    },
    {
      name: 'Tatiana Angel',
      number: '1',
      url: 'tatiana-angel'
    },
    {
      name: 'Stefany Forero',
      number: '1',
      url: 'stefany-forero'
    },
    {
      name: 'Christian & Daniela Castano',
      number: '2',
      url: 'familia-castano'
    }
  ];
}
