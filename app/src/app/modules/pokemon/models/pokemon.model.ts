export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { name: string }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  description: string;
  sound:string;
}
