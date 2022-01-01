import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //Todo: host Host HOST
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('Esta imagen reventro ->', this.elHost);
    elNative.src = '../../../assets/images/default-placeholder.png'
  }
  constructor(private elHost:ElementRef) { 
    console.log(elHost);
  }

}
