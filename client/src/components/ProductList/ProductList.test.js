import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import Product from './Product/Product';

describe('ProductList test', () => {
  const mockProducts = [
    {
      id:1,
      name: 'Arc d\'Triomphe',
      description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
      price: 14.99,
      discounted_price: 0.00,
      image: 'arc-d-triomphe.gif',
      image_2: 'arc-d-triomphe-2.gif',
      thumbnail: 'arc-d-triomphe-thumbnail.gif',
      display: 0
    },
    {
      id:2,
      name: 'name2',
      description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
      price: 14.99,
      discounted_price: 0.00,
      image: 'arc-d-triomphe.gif',
      image_2: 'arc-d-triomphe-2.gif',
      thumbnail: 'arc-d-triomphe-thumbnail.gif',
      display: 0
    }
  ];
  let wrapper;
  beforeEach(() => wrapper = shallow(<ProductList products={mockProducts}/>));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('renders two <Product /> components', () => {
    expect(wrapper.find(Product).length).toEqual(2);
  });

});