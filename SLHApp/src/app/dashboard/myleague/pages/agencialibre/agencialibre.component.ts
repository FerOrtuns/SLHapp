import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyPlayer } from 'src/app/dashboard/interfaces/MyPlayer.interface';
import { InfogmService } from 'src/app/dashboard/services/infogm.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styleUrls: ['./agencialibre.component.css']
})
export class AgencialibreComponent implements OnInit {

  
  pujaFAForm : FormGroup = this.fb.group({
    nameP: ['',[Validators.required]],
    ofertaFA: ['',[Validators.required]],
    years: ['',[Validators.required]],
    team: ['',[Validators.required]],
    startTimeOffer: ['',[Validators.required]],
  })

/*     filter: new FormControl()
 */ 



public page : number = 0;
 
  
  


  listaFAs! : MyPlayer[];

  
 displayedColumns: string[] = ['PUJAR', 'POS', 'PLAYER', 'SALARIO', 'YEARS','EQUIPO', 'TIMELINE' ];

 dataSource = new MatTableDataSource(this.listaFAs);


  constructor (private infogmS : InfogmService, 
               private fb: FormBuilder){}


  ngOnInit() {

    this.infogmS.getFA()            
        .subscribe( resp => {
        this.listaFAs = resp;                  
})
  }

  nextPage(){

    if(this.page< this.listaFAs.length-5){
      this.page += 5;
    }
    
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 5;
    }
  
  }
}
