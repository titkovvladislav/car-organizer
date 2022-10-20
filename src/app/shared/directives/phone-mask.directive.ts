import { Directive, HostListener } from '@angular/core';
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[formControlName][appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event: string) {
    console.log(event)
    this.onInputChange(event, false);
  }

  @HostListener("keydown.backspace", ["$event"])
  keydownBackspace(event: any) {
    this.onInputChange(event.target!.value , true);
  }

  onInputChange(event: string, backspace: boolean) {
    let newVal = event.replace(/[+7]+/g, '')
    newVal = newVal.replace(/\D/g, '')
    if (backspace && newVal.length <= 3) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{1,3})/, '+7($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '+7($1)-$2');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})/, '+7($1)-$2-$3');
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '+7($1)-$2-$3-$4');
    }
    this.ngControl.valueAccessor?.writeValue(newVal);
  }

}
