import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  gameName: string = '';
  
  copyToClipboard(): void {
    navigator.clipboard.writeText(`Fill up the following fields of the game: ${this.gameName}
    
Name:

Sort name: 

Description: 

Original Release Date: 

Platforms: 

Franchise (if they have more games of the same saga, if not, do not show this entry): 

Developers: 

Publishers: 

Genres: 

URL of an image of the front page of the game from Google Images: 
`);
  }
}
