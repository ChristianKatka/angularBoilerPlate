import { Component, Input } from '@angular/core';

@Component({
  selector: 'krisu-app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input()
  size: string | undefined;
}