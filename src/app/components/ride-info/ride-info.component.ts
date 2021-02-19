import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ride-info',
  templateUrl: './ride-info.component.html',
  styleUrls: ['./ride-info.component.css']
})
export class RideInfoComponent implements OnInit, OnDestroy {

  user: string = 'Default Name';
  users: User;

  userSubscription: Subscription;

  constructor(private dataService: DataService) {
    this.users = {
      image: '../../../assets/images/default.jpg',
      name: 'Default',
      email: 'Default',
      phone: 'xxx-xxxx-xxxx',
      location: 'Default',
      ride: {
        origin: 'Default',
        district: 'Default',
        destination: 'Default',
        distance: 0,
        time: 0,
        price: 0,
        energy: 0
      }
    };
  }

  ngOnInit(): void {
    //me subscribo al observable
    // this.userSubscription = this.dataService.userName$.subscribe(text => {
    //   console.log('From ride-info: ', text);
    //   this.user = text;
    // });

    this.userSubscription = this.dataService.userName$.subscribe(user => {
      console.log(user.image);
      this.users = user;
    });

  }

  hideText() {
    let x = document.querySelectorAll<HTMLElement>(".hide");
    for (var i = 0; i < x.length; i++) {
      if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }

  // toogleIcon() {
  //   let btn = document.getElementById("btn-toogle");
  //   btn.classList.toggle("fas fa-toggle-off gray");
  // }

  // darkMode() {
  //   let element = document.body;
  //   element.classList.toggle("dark-mode");
  // }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
