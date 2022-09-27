import { Component, OnInit, Input } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnapModel;
  buttonText!:string;

  ngOnInit() {
    this.buttonText = 'Like!'
  }

  onToggleLike(){
    if(this.buttonText == 'Like!'){
      this.faceSnap.snaps++;
      this.buttonText = 'Unlike!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Like!';
    }
  }
}
