import React from 'react';
import { mount } from 'enzyme';
import ProductList from './ProductList';
import ProductCard from './ProductCard/ProductCard';

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
  beforeEach(() => wrapper = mount(<ProductList products={mockProducts}/>));

  it('renders two <ProductCard /> components', () => {
    expect(wrapper.find(ProductCard).length).toEqual(2);
  });

  it('renders products', () => {
    expect(wrapper.props().products).toEqual(mockProducts);
  });

});