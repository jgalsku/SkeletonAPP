import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-estatura',
  templateUrl: './estatura.page.html',
  styleUrls: ['./estatura.page.scss'],
})
export class EstaturaPage implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }


  volver() {
    this.router.navigate(['/tabs']);
  }
}
