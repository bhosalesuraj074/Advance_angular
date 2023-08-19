import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error('error', error);
  })
  .finally(() => console.log('hello ji'));
