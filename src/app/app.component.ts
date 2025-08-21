import {
  AfterViewInit,
  Component,
  OnInit,
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

  /**
   * Initialise the ngx/translate service.
   */
  public ngOnInit() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.getLang());
  }

  /**
   * Checks if the user already selected a lang or returns the default setting 'en'.
   *
   * @returns Language string to use
   */
  private getLang() {
    return localStorage.getItem('usedLang') ?? 'en';
  }

  /**
   * Initialise the scroll animations for the whole app after.
   */
  public ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  title = 'portfolio';

  private colors = ['rgba(247, 197, 24, 1)', 'rgba(51, 85, 255, 1)', '#f87a55'];
  private animationFrame: number | null = null;

  /**
   * Creates an mouse animation behind the cursor if moving.
   *
   * @param event
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.animationFrame) return;

    this.animationFrame = requestAnimationFrame(() => {
      const dot = this.document.createElement('div');
      const size = Math.random() * 2 + 2;

      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.position = 'fixed';
      dot.style.borderRadius = '50%';
      dot.style.pointerEvents = 'none';
      dot.style.background =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      dot.style.opacity = '0.8';
      dot.style.transition = 'opacity 1.3s, transform 1.3s';
      dot.style.zIndex = '9999';
      dot.style.transform = 'translate(15px, 15px)';

      this.document.body.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'scale(0)';
      }, 50);

      setTimeout(() => dot.remove(), 300);

      this.animationFrame = null;
    });
  }
}
