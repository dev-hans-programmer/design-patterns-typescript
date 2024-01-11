interface Animal {
  clone(): Animal;
  makeSound(): void;
  getBreed(): string;
}

class Dog implements Animal {
  constructor(public breed: string) {}

  clone(): Animal {
    const clone = Object.create(this);
    clone.breed = this.breed;
    return clone;
  }

  makeSound(): void {
    console.log('vou vou');
  }
  getBreed(): string {
    return this.breed;
  }
}

export { Dog, Animal };
