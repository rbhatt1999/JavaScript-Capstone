/**
 * @jest-environment jsdom
 */

import { countProducts, calculateComments, CounterLikes } from '../modules/Functions.js';

describe('Comments and items counter', () => {
  test('Count Items', () => {
    const array = ['item1', 'item2'];
    countProducts(array);
    expect(countProducts(array)).toEqual(2);
  });

  test('Count Comments', () => {
    const array = ['item1', 'item2'];
    calculateComments(array);
    expect(calculateComments(array)).toEqual('Total Comments(2)');
  });

  test('Count likes', () => {
    document.body.innerHTML = '<div>'
      + '<b id="1" class="likes-counter">2</b>'
      + '</div>';
    CounterLikes([{ likes: 5, item_id: '1' }]);
    const item = document.querySelector('.likes-counter').innerHTML;
    expect(+item).toEqual(5);
  });
});
