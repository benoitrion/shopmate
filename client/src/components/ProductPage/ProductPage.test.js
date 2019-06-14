import React from 'react';
import { mount } from 'enzyme';
import ProductPage from './ProductPage';

describe('ProductPage test', () => {
  const mockProduct = {
      id:1,
      name: 'Arc d\'Triomphe',
      description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
      price: 14.99,
      discounted_price: 0.00,
      image: 'arc-d-triomphe.gif',
      image_2: 'arc-d-triomphe-2.gif',
      thumbnail: 'arc-d-triomphe-thumbnail.gif',
      display: 0
  };
  let wrapper, productAddedFn;

  productAddedFn = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <ProductPage 
        product={mockProduct}
        onProductAdded={productAddedFn}/>);
  });

  it('renders product', () => {
    expect(wrapper.props().product).toEqual(mockProduct);
  });
  
  it('renders product details', () => {
    expect(wrapper.find('.product-page_name').text()).toEqual(mockProduct.name);
    const priceStr = wrapper.find('.product-page_price').text();
    expect(Number(priceStr)).toEqual(parseFloat(mockProduct.price));
  });
  
  it('should call `props.addProductToCart` when button is clicked', () => {
    const button = wrapper.find('.product-page_add-to-cart');
    
    expect(productAddedFn.mock.calls.length).toEqual(0);
    button.simulate('click');
    expect(productAddedFn.mock.calls.length).toEqual(1);
    
    expect(productAddedFn.mock.calls[0][0]).toEqual(mockProduct);
  });

  afterEach(() => {
    productAddedFn.mockReset();
  });
});