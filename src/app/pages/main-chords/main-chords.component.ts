import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from './../../../assets/data/chords.json';

export interface Dados {
  cliente: string;
}

@Component({
  selector: 'app-main-chords',
  templateUrl: './main-chords.component.html',
  styleUrls: ['./main-chords.component.scss']
})
export class MainChordsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private sub: any;
  id: any;
  nameMusic = "Avenged Sevenfold - Scream"
  tom = "E"

  ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }
}