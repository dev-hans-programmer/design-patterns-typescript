import Singleton from './implementation';

function testSingleton() {
  const instance1 = Singleton.getInstance();

  const instance2 = Singleton.getInstance();

  instance1.value = 100;

  console.log('First', instance1.value);
  console.log('Second', instance2.value);
  console.log(instance1 === instance2);
}

export default testSingleton;
