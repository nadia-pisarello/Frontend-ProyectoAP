import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  portfolio: Experience[] = [];
  _isLogged: boolean = false;
  _isNew: boolean = false;
  form: FormGroup;

  constructor(public experiencePort: PortfolioService, private token: TokenService) {
    this.form = new FormGroup({
      xpName: new FormControl(['', [Validators.required, Validators.minLength(5)]]),
      descripXp: new FormControl(['', [Validators.required, Validators.minLength(5)]])
    })
  }


  public ngOnInit(): void {
    this.loadExperience();
    if (this.token.getToken()) this._isLogged = true;
  }
  public loadExperience() {
    this.experiencePort.getExperienceData().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    })
  }
  onCreate(event: Event) {

  }

}
