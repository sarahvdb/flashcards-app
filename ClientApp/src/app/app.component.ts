import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
      loadedFeature = 'home';
      clickedFeature = '';

      onNavigate(feature: string) {
        this.loadedFeature = feature;
      }

      onClick(feature: string) {
        this.clickedFeature = feature;
      }
  }
