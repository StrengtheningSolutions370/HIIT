/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { AlertController,LoadingController,ModalController,ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loading: Boolean = false;
  constructor(private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

    toggleLoad() {
      this.loading = !this.loading;
    }

    showAlert(message: string, header?, buttonArray?) {
      this.alertCtrl.create({
        header: header ? header : 'Authentication failed',
        message: message,
        buttons: buttonArray ? buttonArray : ['Okay']
      })
      .then(alertEl => alertEl.present());
    }

    async showToast(msg, color, position, duration = 3000) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: duration,
        color: color,
        position: position
      });
      toast.present();
    }

    errToast(msg?, duration = 5000) {
      this.showToast(msg ? msg : 'Please check your internet connection', 'danger', 'top', duration);
    }

    scsToast(msg) {
      this.showToast(msg, 'success', 'top');
    }

  async nativeLoad(message?, spinner?){
    if(!this.loading) {this.toggleLoad();}
    try {
      const res = await this.loadingCtrl.create({
        message: message,
        spinner: spinner ? spinner : 'bubbles',
        duration: 3000
      });
      res.present().then(() => {
        if (!this.loading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      });
    } catch (e) {
      console.log('show loading error: ', e);
    }
  }

  async endNativeLoad() {
    if(this.loading) {this.toggleLoad();}
    try {
      await this.loadingCtrl.dismiss();
      return console.log('endNativeLoad');
    } catch (err) {
      return console.log('error ending NativeLoad: ', err);
    }
  }
}
