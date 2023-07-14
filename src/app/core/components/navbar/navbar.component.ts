import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleSearchIcon: boolean = false;
  toggleSerchInputFn(input:HTMLInputElement){
    this.toggleSearchIcon = !this.toggleSearchIcon;
    if(this.toggleSearchIcon){
      input.focus()
    }
  }
}
