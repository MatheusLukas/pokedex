import { Children, useState, useRef, FormEvent } from "react";
import { GetPokemonData } from "../utils/fetch";
import SvgAttack from "./icons/SvgAttack";
import SvghP from "./icons/SvgHp";
import SvgSpecialAtack from "./icons/SvgSpecialAtack";
import SvgSpeed from "./icons/SvgSpeed";
import type { Pokemon } from "../@types/Pokemon";
import SvgPlus from "./icons/SvgPlus";
import SvgInfo from "./icons/SvgInfo";

type stat = {
  base_stat: number;
  effort?: number;
  stat: { name: string; url: string };
};

export function Pokedex() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  console.log(pokemon);

  async function searchPokemon(e: FormEvent) {
    e.preventDefault();
    const pokemonName = searchInputRef.current?.value;
    if (!pokemonName?.trim()) {
      return;
    }
    const data = await GetPokemonData(pokemonName);

    if (!data) {
      alert("Pokémon not found!");
    }
    setPokemon(data);
  }

  return (
    <div className="flex">
      <div className="bg-[#f63c5b] w-[400px] h-[600px] border-[6px] rounded-[20px] border-zinc-900 flex justify-start flex-col items-center">
        <div className="flex flex-col gap-4 py-[20px]">
          <div className=" w-[300px] h-[170px] border-[20px] flex items-center rounded-[20px] border-zinc-900 relative  ">
            {/* Foto do pokemon */}

            <img className="rounded-[2px] object-contain" src="/scene.jpg" />

            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20"
              src={
                pokemon?.sprites?.versions["generation-v"]["black-white"]
                  .animated?.front_default
              }
            />
          </div>
          <form onSubmit={searchPokemon} className="relative h-fit">
            {/* Nome do Pokemon */}
            <input
              type="text"
              ref={searchInputRef}
              className="w-[300px] h-[36px] rounded-[5px]  border-[2px] border-black"
              placeholder="Name or Number"
            />
            <button type="submit">
              <img
                className="absolute right-0 top-0 w-8 h-full border-l-2 border-black rounded-sm"
                src="/lupa.svg"
              />
            </button>
          </form>
        </div>

        {/* Status do pokemon */}
        <div className="bg-white w-[300px] h-[220px] rounded-[10px] border-[2px] border-black py-2 px-1">
          <div className="w-full flex flex-wrap justify-center gap-y-3 text-[15px] text-start">
            <h1 className="first-letter:capitalize border-black border-b-2 h-fit w-[80%] text-center mb-5">
              {pokemon?.name}
            </h1>

            {pokemon?.stats?.map((stat: stat) => {
              const statsName = stat.stat.name;
              if (statsName != "special-defense" && statsName != "defense") {
                {
                  {
                    return (
                      <div className="flex flex-row h-10 w-1/2 items-center  border-black border-2">
                        {statsName == "attack" ? (
                          <SvgAttack />
                        ) : statsName == "special-attack" ? (
                          <SvgSpecialAtack />
                        ) : statsName == "hp" ? (
                          <SvghP />
                        ) : (
                          <SvgSpeed />
                        )}
                        <div className="flex flex-row w-1/2">
                          <p className="first-letter:capitalize">{statsName}</p>
                          <p>{stat.base_stat}</p>
                        </div>
                      </div>
                    );
                  }
                }
              }
            })}
            <div className="w-full flex flex-row">
              <div className="w-1/2 px-4 flex justify-center ">
                <button
                  id="Add"
                  className=" w-6 h-6 border-2 bg-green-300 border-black hover:w-full rounded transition-all duration-300 flex flex-row"
                >
                  <SvgPlus />
                </button>
              </div>
              <div className="w-1/2 px-4 flex justify-center ">
                <button
                  id="Info"
                  className=" w-6 h-6 bg-blue-300 border-black border-2 hover:w-full rounded transition-all duration-300 flex flex-row"
                >
                  <SvgInfo />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Botoes */}
        <div className="flex gap-3 mt-[20px] ">
          <button className=" w-[100px] h-[40px] border-[5px] rounded-[10px] border-black bg-zinc-900 text-white hover:bg-white hover:text-black hover:shadow-black hover:shadow-lg hover:scale-110">
            Previous
          </button>
          <button className="w-[100px] h-[40px] border-[5px] rounded-[10px] border-black bg-zinc-900 text-white hover:bg-white hover:text-black hover:shadow-black hover:shadow-lg hover:scale-110 duration-300">
            Next
          </button>
        </div>
      </div>

      <div className="bg-[#f63c5b] w-[300px] h-[550px] border-[6px] rounded-[20px] border-zinc-900 self-end flex items-center flex-col">
        <div className="bg-white w-[250px] h-[100px] mt-[20px] border-[2px] rounded-[10px] border-black flex flex-row flex-wrap gap-[5px] max-w-[880px] justify-center items-center ">
          {Array(8)
            .fill(null)
            .map((item, index) => {
              return (
                <button className="bg-[#f63c5b] w-[50px] h-[30px] text-center border-2 rounded-[10px] border-black hover:text-white hover:scale-110">
                  Gen {index + 1}
                </button>
              );
            })}
        </div>
        <div>
          <div>
            <div className="bg-white w-[250px] h-[380px] mt-[20px] border-[2px] rounded-[10px] border-black flex flex-row flex-wrap gap-[5px] max-w-[880px]  justify-center py-2">
              <h1 className="border-black border-b-2 h-fit w-[80%] text-center">
                Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
