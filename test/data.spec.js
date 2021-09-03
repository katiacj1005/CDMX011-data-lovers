import data from '.src/data/rickandmorty/rickandmorty';
import { order }  from '.src/data.js';


describe('testsParaOrdenado', () => {
  it('testOrdenadoAz',() => {
    expect(order("az",data)).toHaveLength(493);
  });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
});
