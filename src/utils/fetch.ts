export async function GetPokemonData(nomePokemon: string) {
  const api = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`;

  const pokemonData = await fetch(api);
  if (pokemonData.ok) {
    return pokemonData.json();
  }
}
