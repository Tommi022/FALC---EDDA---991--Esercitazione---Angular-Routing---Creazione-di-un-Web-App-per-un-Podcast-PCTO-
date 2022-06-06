import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {
  src : string = ""
  constructor( private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        var id = parseInt(params.id)
        if (id ==0){
          this.src = "../../assets/a.mp3"
        }
        if (id ==1){
          this.src = "../../assets/b.mp3"
        }
        if (id ==2){
          this.src = "../../assets/c.mp3"
        }

      }
    )

  }

}
