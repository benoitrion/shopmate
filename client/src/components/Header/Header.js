import React from 'react';

import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';

import './Header.scss';

function Header() {
  return (
    <React.Fragment>
      <TopAppBar 
        className='top-app-bar'
        title='SHOPMATE'
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('click')}
        />}
        actionItems={[
          <MaterialIcon icon='search' />,
          <MaterialIcon icon='shopping_basket' />,
        ]}
      />
    </React.Fragment>
  );
}

export default Header;
