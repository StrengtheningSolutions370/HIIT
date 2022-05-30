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


    //LOADS
    //------
    toggleLoad() {
      this.loading = !this.loading;
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

    //ALERTS
    //------

    async showAlert(message: string, header?: string, buttonArray?:string[]) {
      await this.alertCtrl.create({
        header: header ? header : 'Alert!',
        message: message,
        buttons: buttonArray ? buttonArray : ['Ok']
      })
      .then(alertEl => alertEl.present());
    }

    //TOASTS
    //------

    async showToast(message:string, color?:string, position:any = "bottom", duration = 5000) {
      const toast = await this.toastCtrl.create({
        message: message,
        duration: duration,
        color: color,
        position: position
      });
      toast.present();
    }

    //MODALS
    //------
    dismissModal() {
      this.modalCtrl.dismiss();
    };
}
