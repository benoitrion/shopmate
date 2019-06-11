import { shallow, mount } from 'enzyme';
import React from 'react';
import Product from './Product';

describe('Header test', () => {
  const mockProduct = {
    id:"1",
    name: 'Arc d\'Triomphe',
    description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
    price: 14.99,
    discounted_price: 0.00,
    image: 'arc-d-triomphe.gif',
    image_2: 'arc-d-triomphe-2.gif',
    thumbnail: 'arc-d-triomphe-thumbnail.gif',
    display: 0
  } 
  let wrapper;
  beforeEach(() => wrapper = mount(<Product product={mockProduct}/>));
  
  it('should render correctly', () => {
    wrapper = shallow(<Product product={mockProduct}/>)
    expect(wrapper).toMatchSnapshot()
  });
  
  it('renders name and description components', () => {
    expect(wrapper.find('h6').text()).toEqual(mockProduct.name);
    expect(wrapper.find('p').text()).toEqual(mockProduct.description);
  });

  it('renders product', () => {
    expect(wrapper.props().product).toEqual(mockProduct);
  });

});