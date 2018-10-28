import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { IBlog } from './blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogList: IBlog[] = [];

  ngOnInit() {
    console.log('oninit');
    this.blogService.getAll().subscribe(
      blogs => this.blogList = blogs
    );
  }

}
