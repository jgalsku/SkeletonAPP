import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }


  volver() {
    this.router.navigate(['/tabs']);
  }
}
