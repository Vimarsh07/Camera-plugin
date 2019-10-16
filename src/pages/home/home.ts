import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';




import { PhotoViewer } from '@ionic-native/photo-viewer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myphoto:any;
  public photos=[];
  photo;

  constructor(public navCtrl: NavController,  private camera: Camera ) {
      

    }
    ngOnInit() {
     // this.photos=[];
      
    }
  

    
  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum:true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/png;base64,' + imageData;
     this.photo=this.myphoto;
     this.photos.push(this.photo);
    }, (err) => {
     // Handle error
    });
  }

   getImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType:this.camera.EncodingType.PNG,
      saveToPhotoAlbum:true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/png;base64,' + imageData;
     this.photo=this.myphoto;
     this.photos.push(this.photo);
    }, (err) => {
     // Handle error
    });
  }

 
  


  
}



