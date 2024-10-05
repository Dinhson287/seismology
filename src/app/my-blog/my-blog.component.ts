import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-my-blog',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './my-blog.component.html',
  styleUrl: './my-blog.component.scss'
})
export class MyBlogComponent {

}
