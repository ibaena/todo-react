import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './Resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {content: (<ResolutionsWrapper/>)})
  }
});
FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {content: (<About/>)})
  }
});
