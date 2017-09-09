import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuComponent from '../components/MenuComponent'
import MenuItemComponent from '../components/MenuItemComponent'
import { assert } from 'chai'

const item = { name: 'Item A', price: 8.99, imagePath: '//via.placeholder.com/300x200' };

const menuItems = [
		{
			"name": "Smoked Swine",
			"price": 8.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 1
		},
		{
			"name": "Royale with Cheese",
			"price": 11.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 2
		},
		{
			"name": "Arugula Pie",
			"price": 14.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 3
		},
		{
			"name": "Ice Cream Biscuit",
			"price": 7.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 4
		}
	];

describe(' tests for MenuComponent', () => {
  it('should have the same number of menuItems as the data', () => {
        let count = mount(<MenuComponent items={menuItems} />).find('MenuItemComponent').length
        assert.equal(count, menuItems.length)

  });
        it('onAddItem should be called', () => {
          const onAddItem = jest.fn();
          mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.menuChoice').simulate('click');
          expect(onAddItem).toHaveBeenCalled()
        });

});
