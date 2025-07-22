import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Front-end');
  public url = '';
  public as_password = false;
  public as_timer = false;
  public password = '';
  public timer = 0;

  verifyPassword() {
    console.log("Verify password");
    if (this.as_password === false) {
      this.password = '';
    }
  }

  verifyTimer() {
    console.log("Verify timer");
    if (this.as_timer === false) {
      this.timer = 0;
    }
  }

  shortenUrl(url: string, password: string) {
    this.verifyPassword();
    this.verifyTimer();

    const finalPassword = this.as_password ? this.password : '';
    const finalTimer = this.as_timer ? this.timer : 0;

    fetch('http://localhost:8080/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, password: finalPassword, timer: finalTimer })
    });

    console.log("sended");
  }
}
