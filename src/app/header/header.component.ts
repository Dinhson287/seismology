import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  selectedOption: any = null;
  constructor(
    private router : Router
  ){}
  ngOnInit(): void {

  }

  goToAboutUs(){
    this.router.navigate(["about-us"])
  }
  goToBlog(){
    this.router.navigate(["blog"])
  }
  createBlog(){
    this.router.navigate(["create"])
  }
  myBlog(){
    this.router.navigate(["my-blog"])
  }
  login(){
    this.router.navigate(["login"])
  }

  onSearch(){}
}
