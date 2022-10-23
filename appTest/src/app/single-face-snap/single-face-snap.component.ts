import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnapModel>
  buttonText!:string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute ) {}
  ngOnInit() {
    this.buttonText = 'Like!';
    const faceSnapId = +this.route.snapshot.params['id']; //+ pour transformer une string en number
    this.faceSnaps$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onToggleLike(faceSnapId: number){
    if(this.buttonText == 'Like!'){
      this.faceSnaps$ = this.faceSnapService.likeFaceSnapById(faceSnapId, 'Like').pipe(
        tap(() => this.buttonText = 'Unlike!')
      );

    } else {
     this.faceSnaps$ = this.faceSnapService.likeFaceSnapById(faceSnapId, 'Unlike').pipe(
       tap(()=> this.buttonText = 'Like!')
     );
    }
  }
}
