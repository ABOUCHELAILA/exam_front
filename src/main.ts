import { bootstrapApplication, provideHttpClient, withFetch } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(withFetch())  // pour activer les appels HTTP
  ]
}).catch(err => console.error(err));
