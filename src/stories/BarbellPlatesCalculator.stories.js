import React from 'react';
import { storiesOf } from '@storybook/react';

// import { BarbellPlatesCalculator } from '../components/BarbellPlatesCalculator';
import { BarbellPlatesCalculator } from '../../dist/index';


const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return(<BarbellPlatesCalculator />);
});