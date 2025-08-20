import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaskOverlayComponent } from './shared/components/mask-overlay/mask-overlay.component';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaskOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
    ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

  ngAfterViewInit(){
    AOS.refresh();
  }
  title = 'portfolio';
}
