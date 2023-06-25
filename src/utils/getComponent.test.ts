import '@testing-library/react';

import { getComponents } from '../utils/getComponents'
import { page } from '../pages/ExamplePage1.json';

describe('getComponents', () => {
  xit('should take an array of objects and return it as an array of components', () => {
    expect(page.elements).toEqual('');
  })
})