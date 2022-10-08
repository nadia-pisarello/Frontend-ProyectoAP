import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  portfolio: Experience[] = [];
  form: FormGroup;
  constructor(public experiencePort: PortfolioService) { 
    this.form = new FormGroup({
      position: new FormControl(['', [Validators.required, Validators.minLength(5)]]),
      description: new FormControl(['',[Validators.required, Validators.minLength(10),Validators.maxLength(100)]])
    })
  }

  ngOnInit(): void {
    this.experiencePort.getExperienceData().subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.portfolio = data;
      console.log(data);
    })
  }

}