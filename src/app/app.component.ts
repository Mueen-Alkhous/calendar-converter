import { Component, OnInit } from '@angular/core';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import moment from 'moment-hijri';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
  title = "convertor"

  gregorianDate: string = new Date().toLocaleDateString()
  hijriDate: string = ""

  ngOnInit(): void {
    console.log(this.gregorianDate)
  }

  gregorianToHijri(){
    this.hijriDate = moment(this.gregorianDate).format('iYYYY/iM/iD')
  }

}

