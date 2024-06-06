import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css',
})
export class SingleBlogComponent implements OnInit {
  constructor(
    private pramaster: ActivatedRoute,
    private blogs: BlogService,
    private router: Router
  ) {}
  item: any;
  blog: any;
  ngOnInit(): void {
    this.router.events.subscribe((envent) => {
      if (envent instanceof NavigationEnd) {
        this.LoadPage();
      }
    });
    this.LoadPage();
  }
  LoadPage() {
    let id: number = this.pramaster.snapshot.params['id'];
    this.blogs.getById(id).subscribe((response) => {
      console.log(response);
      this.item = response;
    });
    this.blogs.getData().subscribe((response) => {
      let list: any = response.filter((a) => a.id != id);

      this.blog =
        list.length >= 4 ? list.slice(0, 3) : list.slice(0, list.length);
    });
  }
}
