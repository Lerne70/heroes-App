import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activarRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activarRoute.params.
    subscribe( ({ id }) => console.log(id));
  }

}
