import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


//this module it should be shared across the whole project, so we should import it in app module 
// so like in services we will have auth.serv,
// dont forget to provide the interceptor ======?-

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
