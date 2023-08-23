import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class Rapid implements HttpInterceptor {
  intercept(req: HttpRequest<any>, res: HttpHandler) {
    console.log('from intercepotor 1');
    let header = new HttpHeaders({
      'X-RapidAPI-Key': '142a30b563msh7cb0b0bcbc43ae8p18392djsnb4b09c6a3c22',
      'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com',
    });
    let myReq = req.clone({
      headers: header,
      setHeaders: {
        msg1: 'This msg from the rapid interceptor 1',
      },
    });
    myReq.params;
    return res.handle(myReq);
  }
}
