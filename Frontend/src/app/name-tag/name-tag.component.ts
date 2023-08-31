import { Component, OnInit } from '@angular/core';
import { NameTagService } from '../service/name-tag.service';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css']
})
export class NameTagComponent implements OnInit {
  newName: string = '';
  names: any[] = [];
  errorName:string = '';

  constructor(private nameTagService: NameTagService) {}

  ngOnInit() {
    this.getData()
  }

  getData():void{
    this.nameTagService.getNameTag().subscribe((data:any[])=>{
      console.log(data)
        this.names = data;
    })
  }

  saveName():void {
    if(!!this.newName){
      this.nameTagService.addName(this.newName).subscribe(()=>{
        console.log('Name added successfully')
        this.getData()
      })
    }else {
      this.errorName = 'Please enter name'
    }
    
  }
}

