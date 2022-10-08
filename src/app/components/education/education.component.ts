import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  portfolio: Education[] = [];
  form: FormGroup;
  constructor(public educationPort: PortfolioService) { 
    this.form = new FormGroup({
      title: new FormControl(['', [Validators.required, Validators.minLength(5)]]),
      description: new FormControl(['',[Validators.required, Validators.minLength(10),Validators.maxLength(100)]])
    })
  }

  ngOnInit(): void {
    this.educationPort.getEducationData().subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.portfolio = data;
      console.log(data);
    })
  }

}
