import React from 'react'
import { render, cleanup } from "@testing-library/react"
import Header from './Header'

afterEach(cleanup)


describe("Header tests", () => {
    test('it displays navbar', () => {
        const {getByTestId, getByText} = render(<Header />);
        const navbar = getByTestId('navbar');

        expect(navbar).toBeInTheDocument()
    });

    test('it displays logo text', () => {
        const {getByTestId, getByText} = render(<Header />);
        const logoText = getByTestId('logo-text')

        expect(logoText).toHaveTextContent('Noted')
    });

})