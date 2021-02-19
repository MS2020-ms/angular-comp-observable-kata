import { Component, OnInit } from '@angular/core';
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user1: {};
  user2: {};
  user3: {};
  userD: {};

  constructor(private dataService: DataService) {

    this.user1 = {
      image: '../../../assets/images/pexels-photo-773371.jpeg',
      name: 'Nora M. Buchanan',
      email: 'invision@invionapp.com',
      phone: '+144-3412-4422',
      location: 'New York NY',
      ride: {
        origin: '37-27 74th Street',
        district: 'Jackson Heights',
        destination: '81 Gate St Brooklyn',
        distance: 12.3,
        time: 42,
        price: 34.20,
        energy: 12.4
      }
    }
    this.user2 = {
      image: '../../../assets/images/pexels-photo-2379005.jpeg',
      name: 'Andrew Duncan',
      email: 'andrew@invionapp.com',
      phone: '+144-4455-1111',
      location: 'New Jersey NY',
      ride: {
        origin: '455 Madison Ave',
        district: 'Staten Island',
        destination: '81 Hylan Blvd',
        distance: 21.4,
        time: 60,
        price: 87.50,
        energy: 25.6
      }
    }
    this.user3 = {
      image: '../../../assets/images/pexels-photo-1065084.jpeg',
      name: 'Gloria Swanson',
      email: 'gloria@invionapp.com',
      phone: '+150-0000-1234',
      location: 'Los Angeles LA',
      ride: {
        origin: '1234 5th Ave',
        district: 'Manhattan',
        destination: '11 Broad St',
        distance: 8.4,
        time: 35,
        price: 27.50,
        energy: 10.5
      }
    }
    this.userD = {};
  }

  ngOnInit(): void {
  }

  // changeUser() {
  //   this.dataService.userName$.emit('Anna Gugennheim');
  // }

  onChange($event) {
    console.log($event.target.value);
    switch ($event.target.value) {
      case "1":
        this.dataService.userName$.emit(this.user1);
        break;
      case "2":
        this.dataService.userName$.emit(this.user2);
        break;
      case "3":
        this.dataService.userName$.emit(this.user3);
        break;
      default:
        this.dataService.userName$.emit(this.userD);
    }

  }

}
