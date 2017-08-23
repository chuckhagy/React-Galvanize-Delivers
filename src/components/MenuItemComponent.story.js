import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import './MenuItemComponent.story.css';

storiesOf('MenuItemComponent', module)
  .add('Happy Path', () =>
    <MenuItemComponent
      item={{
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('IncompleteData', () =>
    <MenuItemComponent
      item={{
        name: 'Some Item A',
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('No Item Passed In', () => <MenuItemComponent />)
  .add('Invalid Price', () =>
    <MenuItemComponent
      item={{
        name: 'Some Item A',
        price: '9.99',
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  );
