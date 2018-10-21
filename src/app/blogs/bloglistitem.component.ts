import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from './blog';

@Component({
  selector: 'app-bloglistitem',
  templateUrl: './bloglistitem.component.html',
  styleUrls: ['./bloglistitem.component.css']
})
export class BloglistitemComponent implements OnInit {

  constructor() { }

  @Input() blog: IBlog;

  ngOnInit() {
  }

}
