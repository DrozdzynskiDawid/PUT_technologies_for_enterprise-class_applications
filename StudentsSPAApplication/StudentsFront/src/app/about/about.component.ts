import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  currentDate: Date = new Date();
  getCurrentDate() {
    return new Date();
  }

  ngOnInit() {
    this.currentDate = this.getCurrentDate();
  }
}
