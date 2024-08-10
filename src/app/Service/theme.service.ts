import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private darkModeClass = 'dark-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme(): void {
    if (this.isDarkMode()) {
      this.renderer.removeClass(document.body, this.darkModeClass);
    } else {
      this.renderer.addClass(document.body, this.darkModeClass);
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.darkModeClass);
  }
}
