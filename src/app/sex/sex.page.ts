import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.page.html',
  styleUrls: ['./sex.page.scss'],
})
export class SexPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  volver() {
    this.router.navigate(['/tabs']);
  }

}

