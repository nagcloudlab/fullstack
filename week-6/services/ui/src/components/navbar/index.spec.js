
import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './index'
import { render, cleanup } from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup);

it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Navbar />, div)
});

it('renders navbar correctly', () => {
    const { getByText } = render(<Navbar title="e-shop" />)
    expect(getByText('e-shop')).toHaveTextContent('e-shop')
})

it('matches snapshot', () => {
    const tree = renderer.create(<Navbar title="E-shop"/>).toJSON()
    expect(tree).toMatchSnapshot();
})