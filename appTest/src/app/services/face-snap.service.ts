import { Injectable } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps : FaceSnapModel[] = [
    {
      id: 1,
      title: 'toto',
      description: 'une jolie description',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdAt: new Date(),
      snaps: 0,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'teddy',
      description: 'une autre jolie description pour la peluche Ours',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdAt: new Date(),
      snaps: 60,
      location: 'Bordeaux'
    },
    {
      id: 3,
      title: 'ted',
      description: 'jolie description de l\'ours ted',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdAt: new Date(),
      snaps: 140,
      location: ''
    }
  ];

  getAllFaceSnaps(): FaceSnapModel[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnapModel {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  likeFaceSnapById(faceSnapId : number, snapType: 'Like' | 'Unlike'):void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'Like' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
