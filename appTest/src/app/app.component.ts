import { Component, OnInit } from '@angular/core';
import {FaceSnapModel} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnapModel;

  ngOnInit() {
    this.mySnap = new FaceSnapModel(
      'toto',
      'une jolie description',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,


    )
  }
}
