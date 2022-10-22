import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadFile($event: any, name: string){
    const file = $event.target.files[0];
    const imageRef = ref(this.storage, 'image/'+ name);
    uploadBytes(imageRef, file)
    .then(res =>{this.getFile()})
    .catch(error => console.log(error));
   
  }

  getFile(){
    const imageRef = ref(this.storage, 'image');
    list(imageRef).then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log(this.url);
      }
    }).catch(error => console.log(error));
  }
}
