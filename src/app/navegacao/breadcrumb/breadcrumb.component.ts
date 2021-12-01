import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumb: string[] = [];


  constructor(private route: Router) {
  }

  ngOnInit() {
    this.criarBreadcrumb();
  }

  criarBreadcrumb() {
    this.route.events.subscribe((value: any) => {

      if (value instanceof RoutesRecognized) {
        this.breadcrumb = value.url.split("/");
      }
    }
    );

  }

}
