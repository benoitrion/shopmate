import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

describe('App test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<ProductList products={[]}/>)).toEqual(true);
  });
});