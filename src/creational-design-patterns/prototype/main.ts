import { Animal, Dog } from './implementation';

function testPrototype() {
  const dog1: Animal = new Dog('Bengali');
  const dog2: Animal = dog1.clone();

  console.log('is Equal ', dog1 === dog2);
  console.log('Are breed same ', dog1.getBreed() === dog2.getBreed());
}

export default testPrototype;
