import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpTestService {
  url = 'http://demo5378352.mockable.io/data';
  constructor(http: Http) {
    this.http = http;
	this.user = "";
  }

  getData(): Promise<any> {
    return this.http.get(this.url)
    .toPromise()
    .then((res: Response)=> res.json())
    .catch((error)=> Promise.reject(error));
  }
  
  setUser(user) {
	this.user = user;
  };
  
  getUser() {
	return this.user;
  }
}
