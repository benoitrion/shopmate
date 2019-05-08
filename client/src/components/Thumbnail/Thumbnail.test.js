import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail';

const src = '../../static/product_images/adoration-of-the-kings.gif';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thumbnail src={src} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
