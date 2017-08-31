import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../src';
import List from '../src/components/List';
import SideMenu from '../src/components/SideMenu';
import View from '../src/components/View';
import json from './fake-data.json';

const {
  schema, currentPathSchema, fields, viewData, offset, lastPage,
  listData, SideMenuItems, viewMode, currentItemId, newMenuItemSecret,
} = json.state;

/**
 * befor run components test you need to run `npm run example`
 * to provide access to test API
 */

test('Layout components', () => {
  const component = renderer.create(
    <Layout
      endpoint="/graphql_cms_endpoint"
      graphql="/graphql"
    />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('List components', () => {
  const component = renderer.create(
    <List
      remove={() => {}}
      offset={offset}
      lastPage={lastPage}
      nextPage={() => {}}
      previewsPage={() => {}}
      addNewItem={() => {}}
      routeToView={() => {}}
      data={json.listD}
      schema={currentPathSchema}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('SideMenu components', () => {
  const component = renderer.create(
    <SideMenu
      items={SideMenuItems}
      handleNewMenuClick={() => {}}
      routeToList={() => {}}
    />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('View components', () => {
  const component = renderer.create(
    <View
      query={()  => {}}
      data={json.data}
      fields={fields}
      update={() => {}}
      remove={() => {}}
      currentItemId={currentItemId}
      addNewItem={() => {}}
      routeToAdd={() => {}}
      uploadImage={() => {}}
      collectFieldsData={() => {}}
      getRequestString={() => {}}
      schema={currentPathSchema}
    />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
