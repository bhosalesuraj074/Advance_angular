import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class Rapid2 implements HttpInterceptor {
  intercept(Req: HttpRequest<any>, next: HttpHandler) {
    console.log('from intercepotor 2');
    let myReq = Req.clone({
      setHeaders: {
        msg2: 'This msg from the Rapid Interceptor 2',
      },
    });
    return next.handle(myReq);
  }
}
