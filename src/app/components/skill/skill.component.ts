import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  portfolio: Skill[]=[];
  _isLogged: boolean = false;
  _isEdit: boolean = false;
  skill: Skill;
  tech: string;
  image: string;

  constructor(private skillService: PortfolioService, private token: TokenService,
    private activated: ActivatedRoute, public uploadService: UploadService) { }

  ngOnInit(): void {
    this.loadSkill();
    if (this.token.getToken()) {
      this._isLogged = true;
    } else this._isLogged = false;
  }

  loadSkill(){
    this.skillService.getSkillData().subscribe(
      data=> {
        this.portfolio = data;
        console.log(this.portfolio);
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillService.deleteSkill(id).subscribe(
        data => {
          this.loadSkill();
        }
      )
    }
  }

  onCreate(event: Event): void {
    const NewSkill = new Skill(this.tech, this.image);
    this.skillService.postSkill(NewSkill).subscribe(
      data => {
        alert("Successful operation");
        window.location.reload();
      }
    )
  }

  selectFile($event: any){
    let id = 1;
    const name = 'skill_'+ id ;
    this.uploadService.uploadFile($event,name);
    id++;
  }

}
