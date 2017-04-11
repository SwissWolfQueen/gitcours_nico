import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { INotifItem } from "../../providers/notifications-service/notif-model";
import { Platform } from 'ionic-angular';

@Injectable()
export class NotifMock  {

  constructor(
    public platform:Platform,
    public localNotifications: LocalNotifications
  ){
  }
  schedule(notif:INotifItem):void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //console.log('platform-> ',this.platform.is('core'))
      if (this.platform.is('core')) {
        alert(`Expired: ${notif.text}`)
      }
      else {
        this.localNotifications.schedule(notif)
      }
    });
  }
}
