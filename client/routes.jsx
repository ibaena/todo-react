import React from 'react';
import ReactDOM from 'react-dom';
import{mount} from 'react-mounter';

import{MainLayout } from './layouts/MainLayout.jsx';
import App from '../App.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    })
  }
});
