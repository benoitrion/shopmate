import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

describe('App test', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<ProductList products={[]}/>)).toEqual(true);
  });
});