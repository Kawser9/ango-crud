import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes, withViewTransitions()), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr(),
    
    // provideHttpClient()

  ],
  
};
