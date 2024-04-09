import { Component } from '@angular/core';
import { AdminAPIService } from '../services/admin-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {


  items: any[] = [];


  constructor(private api: AdminAPIService) { }

  ngOnInit(): void {
    this.viewAPI()
  }

  viewAPI() {
    this.api.userFetch().subscribe({
      next: (res: any) => {
        console.log(res.recipes);
        this.items = res.recipes;

      }, error: (err: any) => {
        console.log(err.message);

      }
    })
  }

}
