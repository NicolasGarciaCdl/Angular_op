import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imgUrl!: string;
  buttonText!:string;

  ngOnInit() {
    this.title = 'toto';
    this.description = 'une jolie description';
    this.createdAt = new Date();
    this.snaps = 6;
    this.imgUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Like!'
  }

  onToggleLike(){
    if(this.buttonText == 'Like!'){
      this.snaps++;
      this.buttonText = 'Unlike!';
    } else {
      this.snaps--;
      this.buttonText = 'Like!';
    }
  }
}
