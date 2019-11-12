# React Viewport Size

Add a little widget in any of your screen corners to see the viewport size.

This widget helps a lot, when you are testing web responsive design, to know the current viewport size, and how the media queries works.

## Installation

npm
```
npm install react-viewport-size
```

yarn
```
yarn add react-viewport-size
```

## usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ViewportSize from 'react-viewport-size';

ReactDOM.render(
  <React.Fragment>
    <App />
    <ViewportSize />
  </React.Fragment>,
  document.getElementById('root')
);
```

## Props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
className|string|`viewport-size-widget`|custom|Define the classname for the widget
corner|string|`top-right`|`[top|bottom]-[left-right]`|Define the position on the screen (only with the default className)
enabledInProduction|boolean|`false`|`true|false`|Render the component in production environment
