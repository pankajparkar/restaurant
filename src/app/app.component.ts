import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = new FormControl('over');
  title = 'rm';
}
