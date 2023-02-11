import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  det:any;
  userId =0;
constructor(servicing:MyServiceService,myactivated:ActivatedRoute){
  this.userId = myactivated.snapshot.params["id"]
servicing.getById(this.userId).subscribe(
  {
    next:(data)=>{this.det = data},
    error:(err)=>{console.log(err)}
  }
)
}
}
