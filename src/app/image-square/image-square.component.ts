import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-square.html',
  styleUrls: ['./image-square.css']
})
export class ImageSquareComponent {
  @Input() src!: string;
}
