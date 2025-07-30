import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  protected readonly title = signal('Front-end');
  public url = '';
  public as_password = false;
  public as_timer = false;
  public password = '';
  public timer = 0;
  public shortUrl = '';
  public host = 'http://localhost:4200';
  public error = false;
  public error_desc = '';

  shortenUrl(url: string, password: string) {
    const finalPassword = this.as_password ? this.password : '';
    const finalTimer = this.as_timer ? this.timer : 0;

    if (url.includes(".") && (url.includes("www") || url.includes("http"))) {
      fetch('http://localhost:8080/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "originalUrl":url, "password": finalPassword, "timer": finalTimer })
      })
      .then(res => res.text())
      .then(text => {const data = JSON.parse(text);this.shortUrl = this.host + '/' + data.shortUrl;})
      .catch(err => console.error('Erro:', err));
    }else {
      this.error = true;
      this.error_desc = 'URL inválida';

      setTimeout(() => {
        this.error = false;
        this.error_desc = '';
      }, 3000);
    } 
  }
}
