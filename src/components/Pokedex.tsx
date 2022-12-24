import { useState } from "react";
import { GetPokemonData } from "../utils/fetch";
import { GetPokemonImage } from "../utils/fetch";

export function Pokedex() {
  const [pokemon, setPokemon] = useState("");
  async function searchPokemon() {
    const mostrarPokemon = await GetPokemonImage(pokemon);
    // const pokemonImage = await GetPokemonImage(pokemon);
    console.log(mostrarPokemon);
  }

  return (
    <div className="flex">
      <div className="bg-[#f63c5b] w-[400px] h-[600px] border-[6px] rounded-[20px] border-zinc-900 flex justify-start flex-col items-center">
        <div className="flex flex-col gap-4 py-[20px]">
          <div className=" w-[300px] h-[170px] border-[20px] flex items-center rounded-[20px] border-zinc-900">
            {/* Foto do pokemon */}
            <img
              className="rounded-[2px] object-contain"
              src="/scene.jpg"
            ></img>
          </div>
          <div className="relative  h-fit">
            {/* Nome do Pokemon */}
            <input
              type={"text"}
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
              className=" w-[300px] h-[36px] rounded-[5px]  border-[2px] border-black  "
              placeholder="Name or Number"
            />
            <button onClick={searchPokemon}>
              <img
                className="absolute right-0 top-0 w-8 h-full border-l-2 border-black rounded-sm"
                src="/lupa.svg"
              />
            </button>
          </div>
        </div>

        {/* Status do pokemon */}
        <div className="bg-white w-[300px] h-[220px] mt-[25px] rounded-[10px] border-[2px] border-black "></div>
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
