import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-userplan',
  imports: [CommonModule],
  templateUrl: './userplan.html',
  styleUrl: './userplan.scss',
})
export class Userplan {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
