import React from 'react';
import { mount } from 'react-mounter';

// Define a layout from the shared components
import { LayoutList } from '/client/configs/components.js';

import FoobarList from './containers/foobar_list';
import FoobarSingle from './components/foobar_single';

export default function (injectDeps, { FlowRouter }) {
  const LayoutListCtx = injectDeps(LayoutList);
  FlowRouter.route('/foobar', {
    name: 'foobar.list',
    action() {
      mount(LayoutListCtx, {
        content: () => (<FoobarList />),
      });
    },
  });
  FlowRouter.route('/foobar/:foobarId', {
    name: 'foobar.single',
    action({ foobarId }) {
      mount(LayoutListCtx, {
        content: () => (<FoobarSingle foobarId={foobarId} />),
      });
    },
  });
}
