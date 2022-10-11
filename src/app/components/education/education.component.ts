import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  portfolio: Education[] = [];
  _isLogged: boolean = false;
  _isNew: boolean = false;
  form: FormGroup;

  constructor(public educationPort: PortfolioService, private token: TokenService) { 
    this.form = new FormGroup({
      title: new FormControl(['', [Validators.required, Validators.minLength(5)]]),
      instituion: new FormControl(['', [Validators.required, Validators.minLength(5)]]),
      descriptionE: new FormControl(['',[Validators.required, Validators.minLength(10),Validators.maxLength(100)]])
    })
  }

  ngOnInit(): void {
    this.loadEducation()
    if (this.token.getToken()) this._isLogged = true;
  }

  loadEducation(){
    this.educationPort.getEducationData().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    })
  }

}
