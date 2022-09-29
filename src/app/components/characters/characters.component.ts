import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  listing: Array<any> = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.listCharacters();
  }
  listCharacters(): void {
    this.charactersService.getAll()
      .subscribe(
        data => {
          this.listing = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



}
