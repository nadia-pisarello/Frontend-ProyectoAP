import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  
  constructor(private skillService: PortfolioService, private activated: ActivatedRoute,
     public uploadService: UploadService,
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.skillService.getOneSkill(id).subscribe(
      data => {
        this.skill = data      
      }
    )
  }

  onUpdate() {
    const id = this.activated.snapshot.params['id'];
    this.skillService.putSkill(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

  selectFile($event: any){
    const id = this.activated.snapshot.params['id'];
    const name = 'skill_'+ id ;
    this.uploadService.uploadFile($event,name);
  }

  



}
