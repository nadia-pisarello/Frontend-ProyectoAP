import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  _isEdit: boolean = false;
  experience: Experience;
  activatedRouter: ActivatedRoute;
  xpId!: number;
  xpName: string;
  descripXp: string;
  i!: number;

  constructor(public experiencePort: PortfolioService, private token: TokenService) {

  }


  public ngOnInit(): void {
    this.loadExperience();
    if (this.token.getToken()) {
      this._isLogged = true;
    } else this._isLogged = false;
    
  }

  public loadExperience() {
    this.experiencePort.getExperienceData().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experiencePort.deleteExperience(id).subscribe(
        data => {
          this.loadExperience();
        }, err => {
          alert("Failed operation");
        }
      )
    }
  }
  onCreate(event: Event): void {
    this._isNew = true;
    const NewExperience = new Experience(this.xpName, this.descripXp);
    this.experiencePort.postExperience(NewExperience).subscribe(
      data => {
        alert("Successful operation");
        window.location.reload();
      }, err => {
        alert("Failed operation");
        window.location.reload();
      }
    )
  }

}
