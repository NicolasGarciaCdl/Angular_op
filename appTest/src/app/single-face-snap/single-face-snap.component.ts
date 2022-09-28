import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnapModel;
  buttonText!:string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute ) {}
  ngOnInit() {
    this.buttonText = 'Like!';
    const faceSnapId = +this.route.snapshot.params['id']; //+ pour transformer une string en number
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
