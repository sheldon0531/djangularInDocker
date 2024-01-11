import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
      this.auth.handleLoginCallback();
  }
}
