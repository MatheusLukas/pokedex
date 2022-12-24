export async function GetPokemonData(nomePokemon: string) {
  const api = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
  const pokemonData = await fetch(api);
  if (pokemonData.ok) {
    return pokemonData.json();
  }
}

export async function GetPokemonImage(nomePokemon: string) {
  const route = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
  const response = await fetch(route);
  if (response.ok) {
    const data = await response.json();
    return data.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  }
}
