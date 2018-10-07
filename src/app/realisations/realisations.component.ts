import {Component} from '@angular/core';

@Component({
    templateUrl: './realisations.component.html',
    styleUrls: ['./realisations.component.css'],
})

export class RealisationsComponent {

  public listRealisations:Array<any> = [
    {titre: 'Projet mobile Luence', icon: 'fa fa-mobile-phone'},
    {titre: 'Chocathome', icon: 'fa fa-mobile-phone'},
    {titre: 'Material Meteo', icon: 'fa fa-mobile-phone'},
    {titre: 'Forum PHP', icon: 'fa fa-globe'},
    {titre: 'Site web Alamgaleri', icon: 'fa fa-wordpress'}
  ];

  public luence:Array<any> = [
    {
      index: 0,
      titre: 'Projet mobile Luence',
      img: '/assets/img/realisations/luence1.png',
      img2: '/assets/img/realisations/luence2.png',
      img3: '/assets/img/realisations/luence3.png',
      text: 'Application mobile',
      societe: 'Luence',
      link: 'http://www.luence.fr',
      icon: 'fa fa-mobile-phone',
      description: "Réalisation d'une application mobile e-commerce cross-platform pour la société Luence",
      caracteristiques: "Back-end WordPress E-Commerce (Woocommerce)",
      technologies: "Ionic 2, Angular2, Wordpress, PHP"
    }
  ];

  public chocathome:Array<any> = [
    {
      index: 1,
      titre: 'Chocathome',
      img: '/assets/img/realisations/chocathome1.png',
      img2: '/assets/img/realisations/chocathome2.png',
      img3: '/assets/img/realisations/chocathome3.png',
      text: 'Application mobile',
      societe: 'Choc@home',
      link: 'http://www.luence.fr',
      icon: 'fa fa-mobile-phone',
      description: "Réalisation d'une application mobile e-commerce cross-platform pour la société Choc@Home lors du stage chez Luence",
      caracteristiques: "Back-end WordPress Woocommerce",
      technologies: "Ionic 2, Angular2, Wordpress, PHP"
    }
  ];

  public materialmeteo:Array<any> = [
    {
      index: 2,
      titre: 'Material Meteo',
      img: '/assets/img/realisations/materialmeteo1.png',
      img2: '/assets/img/realisations/materialmeteo2.png',
      img3: '/assets/img/realisations/materialmeteo3.png',
      text: 'Application mobile',
      societe: 'Projet perso',
      link: 'home',
      icon: 'fa fa-mobile-phone',
      description: "Réalisation d'une application mobile de météo",
      caracteristiques: "Localisation GPS",
      technologies: "Angular Js, Bootstrap, FontAwesome"
    }
  ];

  public forum:Array<any> = [
    {
      index: 3,
      titre: 'Forum PHP',
      img: '/assets/img/realisations/forum1.png',
      img2: '/assets/img/realisations/forum2.png',
      img3: '/assets/img/realisations/forum3.png',
      text: 'Site Web',
      societe: 'Projet de formation',
      link: 'home',
      icon: 'fa fa-globe',
      description: "Réalisation d'un forum de discussion complet",
      caracteristiques: "MVC",
      technologies: "PHP, SQL, Bootstrap, FontAwesome"
    }
  ];

  public alam:Array<any> = [
    {
      index: 4,
      titre: 'Site web Alamgaleri',
      img: '/assets/img/realisations/alamgaleri.png',
      img2: '',
      img3: '',
      text: 'Site Web',
      societe: 'Alam Galeri',
      link: 'http://www.alamgaleri.com',
      icon: 'fa fa-wordpress',
      description: "Réalisation du site web Alam Galeri",
      caracteristiques: "Wordpress",
      technologies: "PHP, SQL, FontAwesome"
    }
  ];

  // ngmodel
  loadedProject:any = null;
  selectedIndex:number = null;
  onlyOne: boolean = false;

  constructor(){}

  close() {
    this.selectedIndex = null;
  }

  load(i) {
    this.selectedIndex=i;
    if(i==0){
      this.loadedProject = this.luence;
      this.onlyOne = false;
    } else if (i==1){
      this.loadedProject = this.chocathome;
      this.onlyOne = false;
    } else if (i==2){
      this.loadedProject = this.materialmeteo;
      this.onlyOne = false;
    } else if (i==3){
      this.loadedProject = this.forum;
      this.onlyOne = true;
      } else if (i==4){
      this.loadedProject = this.alam;
      this.onlyOne = true;
    } else {
      this.loadedProject = null;
    }
  }

}
