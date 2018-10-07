import {Component} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public links:Array<any> = [
    {link: 'realisations', icon: 'fa fa-code', title: 'Réalisations'},
    {link: 'competences', icon: 'fa fa-th-list', title: 'Compétences'},
    {link: 'contact', icon: 'fa fa-envelope-o', title: 'Contact'},
    {link: 'forecast', icon: 'toogleWeatherDiv', title: 'Prévisions'}
    //{link: 'games', icon: 'fa fa-gamepad', title: 'Jeux'}
  ];

}
