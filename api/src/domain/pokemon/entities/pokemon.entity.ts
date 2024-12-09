export class Pokemon {
  private _id: number;
  private _name: string;
  private _image: string;
  private _types: string[];
  private _weight: number; // em kg
  private _height: number; // em metros
  private _abilities: string[];
  private _description?: string;
  private _sound: string;

  constructor(
    id: number,
    name: string,
    image: string,
    types: string[],
    weight: number,
    height: number,
    abilities: string[],
    description?: string,
    sound?: string,
  ) {
    this._id = id;
    this._name = name;
    this._image = image;
    this._types = types;
    this._weight = weight;
    this._height = height;
    this._abilities = abilities;
    this._description = description;
    this._sound = sound || this.generateSoundUrl(name);
  }

  // Getters and Setters
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    if (value <= 0) {
      throw new Error('ID must be a positive number.');
    }
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (!value.trim()) {
      throw new Error('Name cannot be empty.');
    }
    this._name = value.trim();
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    if (!value.startsWith('http')) {
      throw new Error('Image must be a valid URL.');
    }
    this._image = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    if (!value || value.length === 0) {
      throw new Error('Types cannot be empty.');
    }
    this._types = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    if (value <= 0) {
      throw new Error('Weight must be a positive number.');
    }
    this._weight = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value <= 0) {
      throw new Error('Height must be a positive number.');
    }
    this._height = value;
  }

  get abilities(): string[] {
    return this._abilities;
  }

  set abilities(value: string[]) {
    if (!value || value.length === 0) {
      throw new Error('Abilities cannot be empty.');
    }
    this._abilities = value;
  }

  get description(): string {
    return this._description || 'Description not available.';
  }

  set description(value: string) {
    this._description = value?.trim() || 'Description not available.';
  }

  get sound(): string {
    return this._sound;
  }

  set sound(value: string) {
    if (!value.startsWith('http')) {
      throw new Error('Sound must be a valid URL.');
    }
    this._sound = value;
  }

  // Private helper method
  private generateSoundUrl(name: string): string {
    return `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`;
  }

  /**
   * Converts the entity to a plain object for the front-end.
   * Removes the `_` prefixes from private properties.
   */
  toPlainObject(): Record<string, any> {
    return {
      id: this._id,
      name: this._name,
      image: this._image,
      types: this._types,
      weight: this._weight,
      height: this._height,
      abilities: this._abilities,
      description: this._description,
      sound: this._sound,
    };
  }
}
