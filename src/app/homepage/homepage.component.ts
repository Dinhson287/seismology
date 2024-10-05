import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SlideComponent } from '../slide/slide.component';
import { NewsComponent } from '../news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent,SlideComponent,NewsComponent,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }


}
