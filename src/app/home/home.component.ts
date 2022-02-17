import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {zipCode!:string
  data:any;
  key: string = 'Name';
  myItem!: string;
  zcode!: number;
  url = 'http://api.openweathermap.org/data/2.5/weather?id=';
  ccond!: string;      temp!: number;      temp_max!: number;      temp_min!: number;
  ngOnInit(): void {
      
  }
  sun=false; snow=false; rain=false; clouds=false;
  constructor(private http: HttpClient) {}

    setZip(zipcode:any) {
        this.zcode = zipcode;
          localStorage.setItem('Code ', zipcode);
          this.getData()
        }

    getData() {
        this.http.get(this.url + this.zcode+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;
          this.ccond = this.data.weather[0].main;
          this.temp = this.data.main.temp;
          this.temp_max = this.data.main.temp_max;
          this.temp_min = this.data.main.temp_min;
          console.log(this.ccond + '   ' + this.temp  + '   ' +this.temp_min + '   ' +this.temp_max );
          if(this.ccond=="Snow"){
            this.snow=!this.snow
          }
          else if(this.ccond=="Rain"){
            this.rain= !this.rain
          }
          else if(this.ccond=="Clouds"){
            this.clouds=!this.clouds
          }
          else
          this.sun = !this.sun
    });    
  }
}

