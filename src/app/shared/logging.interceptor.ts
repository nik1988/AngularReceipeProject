import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor{

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

   return  next.handle(req).pipe(tap(

      () =>{console.log("response intercepted")}
    ))

  }

}
