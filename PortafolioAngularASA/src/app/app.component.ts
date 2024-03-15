import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Driver } from './models/driver';
import { DriverService } from './services/driver.service';
import PortafolioComponent from "./portafolio/portafolio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PortafolioComponent]
})
export class AppComponent {
  title = 'PortafolioAngularASA';
  drivers: Driver[]=[];

  constructor(private driverService: DriverService){}

  ngOnInit(): void{

    this.driverService.getDriver().subscribe((result: Driver[]) => {

      this.drivers = result;

    });
}
}
