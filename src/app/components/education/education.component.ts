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
  _isEdit: boolean = false;
  education: Education;
  title: string;
  institution: string;
  descriptionE: string;



  constructor(public educationPort: PortfolioService, private token: TokenService) {

  }

  ngOnInit(): void {
    this.loadEducation()
    if (this.token.getToken()) {
      this._isLogged = true;
    } else this._isLogged = false;
  }

  loadEducation() {
    this.educationPort.getEducationData().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educationPort.deleteEducation(id).subscribe(
        data => {
          this.loadEducation();
        }, err => {
          alert("Failed operation");
        }
      )
    }
  }

  onCreate(event: Event): void {
    const NewEducation = new Education(this.title, this.institution, this.descriptionE);
    this.educationPort.postEducation(NewEducation).subscribe(
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
