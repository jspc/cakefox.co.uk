import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('site works without error', () => {
    render(<App />);
});
