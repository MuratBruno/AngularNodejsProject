import { Component, OnInit } from '@angular/core';
import { Http,Response } from  '@angular/http';
import { Observable} from 'rxjs/Rx';
import { map } from 'rxjs/operators';
//import {ServiceTestService} from '../service-test.service';

@Component({
  selector: 'app-product-display-component',
  templateUrl: './product-display-component.component.html',
  styleUrls: ['./product-display-component.component.css']
})
export class ProductDisplayComponentComponent implements OnInit {
	private products:Object[];
	private http:Http;
	private O: Observable<any>;
constructor() { } /*private research: ServiceTestService*/

  ngOnInit() {
	  this.getProducts().subscribe(res => this.products = res);
  }

	getProducts() : Observable<any>{ 
		let url:string = 'http://localhost:8888/';
		let observable: Observable<any>=this.http.get(url).map((res:Response) =>  res.json());
	return observable;

	
}


}