import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth"

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth, 
    private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.angularFireAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.toast.create({
          message:'Bienvenido '+data.email,
          duration:3000,
          position: 'top'
        }).present();
      }else{
        this.toast.create({
          message:'Erorr de login',
          duration:3000,
          position: 'top'
        }).present();
      }
      console.log(data)
    
    });
  }

}
