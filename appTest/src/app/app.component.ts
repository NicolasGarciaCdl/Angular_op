import { Component, OnInit } from '@angular/core';
import {FaceSnapModel} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnapModel[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'toto',
        description: 'une jolie description',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdAt: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'teddy',
        description: 'une autre jolie description pour la peluche Ours',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdAt: new Date(),
        snaps: 60,
        location: 'Bordeaux'
      },
      {
        title: 'ted',
        description: 'jolie description de l\'ours ted',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdAt: new Date(),
        snaps: 140,
        location: 'Toulouse'
      }
    ];
  }
}
