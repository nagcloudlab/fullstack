
import React from 'react';
import ReactDOM from 'react-dom';

import List from './List'

import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// it('should render without crash', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<List />, div)
// })

// it("should have header element", () => {
//     const wrapper = shallow(<List />)
//     console.log(wrapper.debug())
//     expect(wrapper.find('.card-header').get(0)).toBeDefined()
// })

// it("should title on header element", () => {
//     const wrapper = shallow(<List title="List1"/>)
//     console.log(wrapper.debug())
//     expect(wrapper.find('.card-header').get(0).props.children).toEqual('List1')
// })


// it("should render items", () => {
//     const wrapper = mount(<List title="List1" items={[1, 2, 3]} />)
//     expect(wrapper.find('li').length).toBe(3)
// })

