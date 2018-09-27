import {
  Directive,
  ElementRef,
  HostListener, OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector:'[dropdowndirective]'
})
export class dropdowndirective implements OnInit{

 // renderer:Renderer2
  //elementRef :ElementRef


 constructor(private elementRef:ElementRef,private renderer:Renderer2){}

  ngOnInit(){

}

   clicked:boolean = false


  @HostListener('click') onMouseClick() {

    this.clicked = !this.clicked
    if (this.clicked) {

    console.log("click diredtive invoked");
    this.renderer.addClass(this.elementRef.nativeElement, 'open')
      this.clicked = true;
  }
  else{
      this.renderer.removeClass(this.elementRef.nativeElement,'open')
    }


  }

  /*@HostListener('mouseleave') onMouseLeave(){

   this.renderer.removeClass(this.elementRef.nativeElement,'open')
  }*/

}
