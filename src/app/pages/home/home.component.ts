import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import * as data from './../../../assets/data/bands/bands.json';

interface Band {
  band: string;
  musics: Music[];
}

interface Music {
  id: number,
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {


  isList: any;
  subList = 3;

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getBands().subscribe(x => {
      console.log(x)
    })
  }
}
