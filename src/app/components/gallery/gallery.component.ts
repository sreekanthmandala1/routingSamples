import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  paramQuery = '';
  secondParam = '';
  thirdParam = '';
  color = '';
  size = 10;
  quantity = 300
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data=>{
      this.paramQuery = data.id;
      this.secondParam = data.id;
      this.thirdParam = data.id;
    });

    this.activatedRoute.queryParams.subscribe(params=>{
      this.color = params.color;
      this.size = params.size;
      this.quantity = params.quantity;
    })
  }

  ngOnInit(): void {

  }

}
