import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './slide/slide.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    BlogComponent,
    CreateBlogComponent,
    MyBlogComponent,
    LogInComponent,
    RegisterComponent,
    FormsModule,
    SlideComponent,
    NewsComponent,
    HttpClientModule,
    BrowserModule
  ]
})
export class AppModule { }
