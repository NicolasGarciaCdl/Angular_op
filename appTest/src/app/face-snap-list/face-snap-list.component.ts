import { Component, OnInit } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnapModel[];

  constructor(private faceSnapsService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
