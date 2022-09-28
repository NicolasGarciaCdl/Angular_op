import { Component, OnInit, Input } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnapModel;
  buttonText!:string;

  constructor(private faceSnapService: FaceSnapService) {
  }
  ngOnInit() {
    this.buttonText = 'Like!'
  }

  onToggleLike(){
    if(this.buttonText == 'Like!'){
      this.faceSnapService.likeFaceSnapById(this.faceSnap.id, 'Like');
      this.buttonText = 'Unlike!';
    } else {
      this.faceSnapService.likeFaceSnapById(this.faceSnap.id, 'Unlike')
      this.buttonText = 'Like!';
    }
  }
}
