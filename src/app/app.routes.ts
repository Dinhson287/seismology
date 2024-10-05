import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },

  {
    path:"my-blog",
    component:MyBlogComponent
  },
  {
    path:"login",
    component:LogInComponent
  },
  {
    path:"create",
    component:CreateBlogComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },

];
