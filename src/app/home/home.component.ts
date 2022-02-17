import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zipCode:any
  data:any;
  zcode!: number;
  url = 'http://api.openweathermap.org/data/2.5/weather?id=';
  ccond!: number;      temp!: number;      temp_max!: number;      temp_min!: number;
  ngOnInit(): void {
      
  }
  constructor(private http: HttpClient) {}

    setZip(zipcode:any) {
        this.zcode = zipcode;
        localStorage.setItem('ZipCode : ', zipcode);
        this.getData();
    }
    getData() {
        this.http.get(this.url + this.zcode+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;
          this.ccond = this.data.weather[0].main;
          this.temp = this.data.main.temp;
          this.temp_max = this.data.main.temp_max;
          this.temp_min = this.data.main.temp_min;
          console.log(this.ccond + '   ' + this.temp  + '   ' +this.temp_min + '   ' +this.temp_max );        
    });    
  }
}
