import { Component, OnInit } from '@angular/core';
import { PokemonRestServiceService } from 'src/app/services/pokemon-rest-service.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {
  pokeNombre : any
  pokeImagen : any
  pokeNombre2 : any
  pokeImagen2 : any
  pokeNombre3 : any
  pokeImagen3 : any
  pokeNombre4 : any
  pokeImagen4 : any
  pokeNombre5 : any
  pokeImagen5 : any
  pokeNombre6 : any
  pokeImagen6 : any
  constructor(
    private pokeRest : PokemonRestServiceService
  ) { }

  ngOnInit(): void {
    this.obtenerPokemon()
  }

  obtenerPokemon(){
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre = res.name,
        this.pokeImagen = res.sprites.front_default
        console.log(this.pokeNombre, this.pokeImagen)
      }
    })
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre2 = res.name,
        this.pokeImagen2 = res.sprites.front_default
        console.log(this.pokeNombre2, this.pokeImagen2)
      }
    })
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre3 = res.name,
        this.pokeImagen3 = res.sprites.front_default
        console.log(this.pokeNombre3, this.pokeImagen3)
      }
    })
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre4 = res.name,
        this.pokeImagen4 = res.sprites.front_default
        console.log(this.pokeNombre4, this.pokeImagen4)
      }
    })
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre5 = res.name,
        this.pokeImagen5 = res.sprites.front_default
        console.log(this.pokeNombre5, this.pokeImagen5)
      }
    })
    this.pokeRest.getPokemon(Math.round(Math.random()*897)).subscribe({
      next:(res:any)=>{
        this.pokeNombre6 = res.name,
        this.pokeImagen6 = res.sprites.front_default
        console.log(this.pokeNombre6, this.pokeImagen6)
      }
    })
  }

}
