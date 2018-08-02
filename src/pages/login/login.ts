import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"
import { HomePage } from '../home/home';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private angularFireAuth: AngularFireAuth, private toast: ToastController) {
  }
//Is function registration page  
  register(){
    this.navCtrl.push('RegisterPage');
  }
  //Is function login page  
  //wait for a piece of the delivery promise typescrip async 
  async login(user: User){
    try{
      const result=this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password).catch(function(error){});
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.toast.create({
          message:'Error de Usuario o Contraseña ',
          duration:3000
        }).present();
      }
    }
    catch(e)
    {
      console.error(e);
    }
     
  }

}
