import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './models/upload';
import 'firebase/storage';

@Injectable()
export class UploadService {
  listings: AngularFireList<any[]>;
  listing: AngularFireObject<any[]>;
  folder: any;

  constructor(private af: AngularFireDatabase) {
    this.folder = 'listingimages';
    this.listings = this.af.list('/listings') as AngularFireList<Listing[]>;
  }

  getListings() {
    this.listings = this.af.list('/listings') as AngularFireList<Listing[]>;
    return this.listings;
  }

  // getListingDetails(id) {
  //   this.listing = this.af.object('/listings/' + id) as AngularFireObject<Listing>;
  //   return this.listing;
  // }

  addListing(listing) {
    // this.listings = this.af.list('/listings') as AngularFireList<Listing[]>;
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
        // console.log(listing);
      });
    }
  }

}

interface Listing {

  menuName?: string;
  description?: string;
  group?: string;
  price?: number;
  image?: any;

 }
