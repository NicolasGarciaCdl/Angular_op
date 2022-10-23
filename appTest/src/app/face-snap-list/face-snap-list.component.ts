import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!: Observable<FaceSnapModel[]>;

  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
