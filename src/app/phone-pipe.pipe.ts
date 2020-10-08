import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {



  transform(phoneNumber: string): string {
    let phoneNumberFormatted: string = "(+33) " + phoneNumber.charAt(1) + " " + phoneNumber.substr(2,2) 
    + " " + phoneNumber.substr(4,2) + " " + phoneNumber.substr(6,2) + " " + phoneNumber.substr(8,2);
    
    return phoneNumberFormatted;
  }
}
