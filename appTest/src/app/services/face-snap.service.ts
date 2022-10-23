import { Injectable } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor(private http: HttpClient) {
  }

  faceSnaps$!: Observable<FaceSnapModel[]>


  getAllFaceSnaps(): Observable<FaceSnapModel[]> {
    return this.http.get<FaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnapModel> {
    return this.http.get<FaceSnapModel>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  likeFaceSnapById(faceSnapId: number, snapType: 'Like' | 'Unlike'): Observable<FaceSnapModel> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'Like' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnapModel>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    )
  }

  addFaceSnap(formValue: { title: string, description: string, imgUrl: string, location?: string }): Observable<FaceSnapModel> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(lastFaceSnap => ({
        id: lastFaceSnap.id + 1,
        snaps: 0,
        createdAt: new Date(),
        ...formValue
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnapModel>('http://localhost:3000/facesnaps', newFaceSnap))
    );
  }
}
