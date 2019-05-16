import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NavBar } from '../src/index.js';

storiesOf('NavBar', module)
.add('with no links', () => {
  return <NavBar />;
})
.add('with links', () => {
  let navlinks = {
    'Home': '#',
    'Blog': 'blog'
  };
  return <Router><NavBar links={ navlinks } /></Router>;
})
.add('with links and logo', () => {
  let navlinks = {
    'Home': '#',
    'Blog': 'blog'
  };
  return <Router><NavBar links={ navlinks } logo="https://i.imgur.com/vJ69elR.png" /></Router>;
});
