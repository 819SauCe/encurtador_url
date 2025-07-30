import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './redirect.html',
  styleUrls: ['./redirect.css']
})

export class Redirect {
  url = '';
  askPassword = false;
  inputPassword = '';
  password = '';
  timerLeft = 0;
  loading = true;
  error = '';
  ready = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    const shortUrl = this.route.snapshot.paramMap.get('codigo');
    if (shortUrl) {
      this.http.get<any>(`http://localhost:8080/api/${shortUrl}`).subscribe({
        next: (res) => {
          this.url = res.originalUrl.startsWith('http') ? res.originalUrl : 'https://' + res.originalUrl;
          this.password = res.password || '';
          this.askPassword = !!this.password;
          if (res.timer && res.timer > 0) {
            this.timerLeft = res.timer;
            const interval = setInterval(() => {
              this.timerLeft--;
              if (this.timerLeft <= 0) {
                clearInterval(interval);
                this.timerLeft = 0;
                if (!this.askPassword) this.doRedirect();
              }
            }, 1000);
          } else if (!this.askPassword) {
            this.doRedirect();
          }
          this.loading = false;
        },
        error: () => {
          this.error = 'Código não encontrado!';
          this.loading = false;
        }
      });
    }
  }

  checkPassword() {
    if (this.password !== this.inputPassword) {
      this.error = 'Invalid password!';
      return;
    }
    if (this.timerLeft > 0) {
      this.error = `Wait timer!`;
      return;
    }
    this.doRedirect();
  }

  doRedirect() {
    this.ready = true;
    window.location.href = this.url;
  }
}
