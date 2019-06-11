import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import TopAppBar from '@material/react-top-app-bar';

  describe('Header test', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Header />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('renders without crashing', () => {
    expect(wrapper.find(TopAppBar).length).toEqual(1);
  });

});