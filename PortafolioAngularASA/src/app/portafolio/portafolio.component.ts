import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverService } from '../services/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export default class PortafolioComponent {
    title = 'Portafolio.App'
    drivers: Driver[]=[];

    constructor(private driverService: DriverService){}
  
    ngOnInit(): void{
  
      this.driverService.getDriver().subscribe((result: Driver[]) => {
  
        this.drivers = result;
  
      });
  }
    
}
