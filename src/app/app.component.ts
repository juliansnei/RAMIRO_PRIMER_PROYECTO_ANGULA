import { Component } from '@angular/core';

@Component({
  selector: 'component-jul',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public name:string = 'Julian'
  public nameModified:string = ''

  // OnInit() {
  //   this.changeName()
  // }

  changeName() {
    this.nameModified = this.name + 'Modified'
  }
}
