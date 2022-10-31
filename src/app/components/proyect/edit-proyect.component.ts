import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyect: Proyect = null;
  constructor( private proyectService: PortfolioService, private router:Router,
    public uploadService: UploadService,
    private activated: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params['id'];
    this.proyectService.getOneProyect(id).subscribe(
      data => {
        this.proyect = data      
      }
    )
  }

  onUpdate() {
    const id = this.activated.snapshot.params['id'];
    this.proyectService.putProyecto(id, this.proyect).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

  selectFile($event: any){
    const id = this.activated.snapshot.params['id'];
    const name = 'proyect_'+ id ;
    this.uploadService.uploadFile($event,name);
  }
}
