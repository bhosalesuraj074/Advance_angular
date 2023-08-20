import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((res) => {})
  .catch((error) => {
    console.error('error', error);
  });
