import {
  AfterViewInit,
  Component,
  OnInit,
  Inject,
  HostListener,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaskOverlayComponent } from './shared/components/mask-overlay/mask-overlay.component';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaskOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  ngOnInit() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

 
  }

  ngAfterViewInit() {
       AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }
  title = 'portfolio';

  private colors = ['rgba(247, 197, 24, 1)', 'rgba(51, 85, 255, 1)', '#f87a55'];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const dot = this.document.createElement('div');
    const size = Math.random() * 2 + 2;

    const offsetX = (Math.random() - 0.25) * 5;
    const offsetY = (Math.random() - 0.25) * 5;

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.position = 'fixed';
    dot.style.borderRadius = '50%';
    dot.style.pointerEvents = 'none';
    dot.style.background =
      this.colors[Math.floor(Math.random() * this.colors.length)];
    dot.style.left = `${event.clientX + offsetX}px`;
    dot.style.top = `${event.clientY + offsetY}px`;
    dot.style.transform = 'translate(15px, 15px)';
    dot.style.opacity = '0.8';
    dot.style.transition = 'opacity 0.3s, transform 0.3s';
    dot.style.zIndex = '9999';

    this.document.body.appendChild(dot);

    setTimeout(() => {
      dot.style.opacity = '0';
      dot.style.transform = 'scale(0)';
    }, 50);

    setTimeout(() => dot.remove(), 300);
  }
}
