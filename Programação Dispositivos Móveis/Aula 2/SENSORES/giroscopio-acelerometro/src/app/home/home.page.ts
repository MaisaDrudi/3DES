import { Component } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import {DeviceMotion,DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  x:any;
  y:any;
  z:any;
  accX:any;
  accY:any;
  accZ:any;
  timestamp:any;

  constructor(private gyroscope: Gyroscope, private  deviceMotion: DeviceMotion) {
    this.x = -1;
    this.y = -1;
    this.z = -1;
    this.accX = -1;
    this.accY = -1;
    this.accZ = -1;
    this.timestamp = -1;
  }

  giroscopioCurrent(){

  this.gyroscope.getCurrent()
    .then((orientation: GyroscopeOrientation) => {
      this.x = orientation.x;
      this.y = orientation.y;
      this.z = orientation.z;
      this.timestamp = orientation.timestamp;
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    })
    .catch()
  }
    giroscopioWatch(){

     let options: GyroscopeOptions = {
       frequency: 500
     };
     this.gyroscope.watch(options)
     .subscribe((orientation: GyroscopeOrientation) => {
        this.x=orientation.x;
        this.y=orientation.y;
        this.z=orientation.z;
        this.timestamp=orientation.timestamp;
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
     });
   }


  acelerometro(){
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) =>
       console.log(acceleration),
 
    );
    
     let options: GyroscopeOptions = {
      frequency: 500
    };

    var subscription = this.deviceMotion.watchAcceleration(options)
    .subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      this.accX=acceleration.x;
      this.accY=acceleration.y;
      this.accZ=acceleration.z;
    });
    
  }

}
