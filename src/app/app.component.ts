import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test';
  // public label:string = 'Sign Above';
  // public width:number = 300;
  // public height:number = 300;


  // // onClearHandler() {
  // //   console.log('onclear clicked...');
  // // }

  // // onSaveHandler(data: any) {
  // //   console.log('onsave clicked');
  // //   console.log(data);
  // //   window.open(data);
  // // }

  // points = [];
  // signatureImage: any;

  // showImage(data: any) {
  //   this.signatureImage = data;
  // }

  title = 'Angular signature example';
  signatureImg: string | undefined;
  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 200,
    'canvasHeight': 200
  };

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
}
