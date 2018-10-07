import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'notfound',
  templateUrl: './notfound.component.html'
})

export class NotFoundComponent {

  constructor(public router: Router) {}

}
