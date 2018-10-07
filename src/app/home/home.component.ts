import { Component } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  abouts = [
    {icon: 'fa fa-graduation-cap', text: 'Développeur logiciel', link:'http://elan-formation.eu/course/developpeur-logiciel/', linkDescription:'Elan, Strasbourg'},
    {icon: 'fa fa-briefcase', text: 'Stage développement mobile', link:'http://luence.fr', linkDescription:'Luence, Hoenheim'},
    {icon: 'fa fa-code', text: 'Applications mobile', link:'/realisations', linkDescription:'Luence, Hoenheim'},
    {icon: 'fa fa-black-tie', text: 'Infographiste (2005-2015)', link:'http://www.grande-forge.fr', linkDescription:'Grande Forge, Eschau'},
  ];

  constructor() {}

}
