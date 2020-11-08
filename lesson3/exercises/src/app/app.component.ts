import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  status: string = "Space shuttle ready for takeoff!";
  backGroundColor: string = "green";
  takeOffEnabled: boolean = true;
  downEnabled: boolean = false;
  upEnabled: boolean = false;
  leftEnabled: boolean = false;
  rightEnabled: boolean = false;

  takeOff() {
    if (confirm("Confirm that the shuttle is ready for takeoff.")) {
      this.status = "Shuttle in flight.";
      this.backGroundColor = "blue";
      this.height = 10000;
      this.takeOffEnabled = false;
    }
  }

  land(rocketImage: any) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.status = "The shuttle has landed.";
    this.backGroundColor = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  abort(rocketImage: any) {
    if (confirm("Do you really want abort the mission?")) {
      this.status = "Mission aborted.";
      this.backGroundColor = "red";
      this.height = 0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage: any, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.leftEnabled = parseInt(rocketImage.style.left) <= 0;
      this.rightEnabled = parseInt(rocketImage.style.left) >= 460;
    }
    else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      this.downEnabled = this.height <= 0;
      this.upEnabled = this.height >= 340000;
    }
    else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
      this.downEnabled = this.height <= 0;
      this.upEnabled = this.height >= 340000;
    }
    else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.leftEnabled = parseInt(rocketImage.style.left) <= 0;
      this.rightEnabled = parseInt(rocketImage.style.left) >= 460;
    }
  }
}

