import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private blogs: BlogService) {}
  listBlogs: any;
  ngOnInit(): void {
    this.LoadPage();
  }

  LoadPage() {
    this.blogs.getData().subscribe((response) => {
      this.listBlogs = response;
      console.log(response);
    });
  }
}
