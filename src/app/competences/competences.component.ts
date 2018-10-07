import {Component} from '@angular/core';

@Component({
  selector: 'competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})

export class CompetencesComponent {

  public competences:Array<any> = [
    {titre: 'langages', icon: 'devicons devicons-html5'},
    {titre: 'frameworks', icon: 'devicons devicons-angular'},
    {titre: 'autres', icon: 'fa fa-ellipsis-h'},
    {titre: 'adobe', icon: 'devicons devicons-photoshop'},
    {titre: 'office', icon: 'fa fa-file-word-o'}
  ];

  public langages:Array<any> = [
    {
      titre: 'HTML5',
      description: 'Hypertext Language Markup',
      icon: 'devicons devicons-html5'
    },
    {
      titre: 'CSS3',
      description: 'Cascading Style Sheets',
      icon: 'devicons devicons-css3'
    },
    {
      titre: 'PHP',
      description: 'Hypertext Preprocessor',
      icon: 'devicons devicons-php'
    },
    {
      titre: 'SQL',
      description: 'Structured Query Language',
      icon: 'devicons devicons-mysql'
    },
    {
      titre: 'TYPESCRIPT',
      description: 'Superset Javascript',
      icon: 'devicons devicons-javascript'
    },
    {
      titre: 'SASS',
      description: 'Syntactically Awesome Stylesheets',
      icon: 'devicons devicons-sass'
    }
  ];

  public frameworks:Array<any> = [
    {
      titre: 'ANGULAR 2',
      description: 'Google JS Framework',
      icon: 'devicons devicons-angular'
    },
    {
      titre: 'IONIC 2',
      description: 'Mobile apps framework',
      icon: 'devicons devicons-ionic'
    },
    {
      titre: 'BOOTSTRAP',
      description: 'Css framework',
      icon: 'devicons devicons-bootstrap'
    },
    {
      titre: 'CORDOVA',
      description: 'Apache Cordova',
      icon: 'devicons devicons-phonegap'
    },
    {
      titre: 'JQUERY',
      description: 'JS structured language',
      icon: 'devicons devicons-jquery_ui'
    }
  ];

  public autres:Array<any> = [
    {
      titre: 'GIT',
      description: 'Version control system',
      icon: 'devicons devicons-git'
    },
    {
      titre: 'LINUX',
      description: 'Linux OS',
      icon: 'devicons devicons-linux'
    },
    {
      titre: 'NPM',
      description: 'Node.js package manager',
      icon: 'devicons devicons-npm'
    },
    {
      titre: 'WORDPRESS',
      description: 'CMS',
      icon: 'devicons devicons-wordpress'
    }
  ];

  public adobe:Array<any> = [
    {
      titre: 'Photoshop',
      description: 'Adobe Photoshop',
      icon: '/assets/img/adobe/photoshop.svg'
    },
    {
      titre: 'InDesign',
      description: 'Adobe Indesign',
      icon: '/assets/img/adobe/indesign.svg'
    },
    {
      titre: 'Illustrator',
      description: 'Adobe Illustrator',
      icon: '/assets/img/adobe/illustrator.svg'
    }
  ];

  public office:Array<any> = [
    {
      titre: 'WORD',
      description: 'Text editor',
      icon: '/assets/img/office/word.svg'
    },
    {
      titre: 'EXCEL',
      description: 'Tables editor',
      icon: '/assets/img/office/excel.svg'
    },
    {
      titre: 'POWERPOINT',
      description: 'Presentation editor',
      icon: '/assets/img/office/powerpoint.svg'
    }
  ];

  // ngmodel
  titlePassed: any = '';
  selectedIndex: number = null;

  competenceObject;

  constructor(){}

  toggleCompetences(titre, i) {
    this.selectedIndex = i;
    this.competenceObject = this.selectObject(titre);
    this.titlePassed = titre;

    console.log(this.titlePassed, i, this.selectObject(titre));
  }

  selectObject(titre){
    if(titre == "langages" ){
      this.competenceObject = this.langages;
    } else if(titre == "frameworks" ){
      this.competenceObject = this.frameworks;
    } else if(titre == "autres" ){
      this.competenceObject = this.autres;
    } else if(titre == "adobe" ){
      this.competenceObject = this.adobe;
    } else if(titre == "office" ){
      this.competenceObject = this.office;
    }
  }

  nextSkill(titlePassed){
    if(titlePassed == "langages" ){
      this.titlePassed = "frameworks";
      this.competenceObject = this.frameworks;
    } else if(titlePassed == "frameworks" ){
      this.titlePassed = "autres";
      this.competenceObject = this.autres;
    } else if(titlePassed == "autres" ){
      this.titlePassed = "adobe";
      this.competenceObject = this.adobe;
    } else if(titlePassed == "adobe" ){
      this.titlePassed = "office";
      this.competenceObject = this.office;
    } else if(titlePassed == "office" ){
      this.titlePassed = "langages";
      this.competenceObject = this.langages;
    }
  }

  previousSkill(titlePassed){
    if(titlePassed == "langages" ){
      this.titlePassed = "office";
      this.competenceObject = this.office;
    } else if(titlePassed == "office" ){
      this.titlePassed = "adobe";
      this.competenceObject = this.adobe;
    } else if(titlePassed == "adobe" ){
      this.titlePassed = "autres";
      this.competenceObject = this.autres;
    } else if(titlePassed == "autres" ){
      this.titlePassed = "frameworks";
      this.competenceObject = this.frameworks;
    } else if(titlePassed == "frameworks" ){
      this.titlePassed = "langages";
      this.competenceObject = this.langages;
    }
  }

}
