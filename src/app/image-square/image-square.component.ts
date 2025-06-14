import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-square.html',
  styleUrls: ['./image-square.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSquareComponent {
  @Input() src!: string;
}
