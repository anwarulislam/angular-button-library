// directive for the medatus-button component
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[medatus-button]',
})
export class MedatusButtonDirective implements OnInit {
  @Input() medatusButton!: string;
  @Input() size!: 'small' | 'medium' | 'large'; // default medium
  @Input() type!: string;
  @Input() color!: string;
  @Input() shape!: 'rounded' | 'square' | 'pilled';

  // hostlistener for hover, active, disabled, focus. and add class accordingly
  @HostListener('mouseenter') onMouseEnter() {
    this.onHoverToggle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.onHoverToggle(false);
  }

  @HostListener('mousedown') onMouseDown() {
    this.onActiveToggle();
  }

  @HostListener('mouseup') onMouseUp() {
    this.onActiveToggle(false);
  }

  @HostListener('focus-visible') onFocus() {
    this.onFocusToggle();
  }

  @HostListener('blur') onBlur() {
    this.onFocusToggle(false);
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('medatus-button');

    // SET TYPE
    if (this.type) {
      this.el.nativeElement.classList.add(`medatus-button-${this.type}`);
    } else {
      this.el.nativeElement.classList.add('medatus-button-filled');
    }

    // SET COLOR
    if (this.color) {
      this.el.nativeElement.classList.add(`button-color-${this.color}`);
    } else {
      this.el.nativeElement.classList.add('button-color-primary');
    }

    // SET SHAPE
    if (this.shape) {
      this.el.nativeElement.classList.add(`button-shape-${this.shape}`);
    } else {
      this.el.nativeElement.classList.add('button-shape-pilled');
    }

    // SET SIZE
    if (this.size) {
      this.el.nativeElement.classList.add(`button-size-${this.size}`);
    } else {
      this.el.nativeElement.classList.add('button-size-medium');
    }
  }

  onHoverToggle(e: boolean = true) {
    this.el.nativeElement.classList[e ? 'add' : 'remove'](
      'medatus-button-hover'
    );
  }

  onActiveToggle(e: boolean = true) {
    this.el.nativeElement.classList[e ? 'add' : 'remove'](
      'medatus-button-active'
    );
  }

  onFocusToggle(e: boolean = true) {
    this.el.nativeElement.classList[e ? 'add' : 'remove'](
      'medatus-button-focus'
    );
  }
}
