import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  protected scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
