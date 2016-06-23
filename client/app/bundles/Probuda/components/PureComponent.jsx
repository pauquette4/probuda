import React from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class PureComponent extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  //   return this.props.value !== nextProps.value;
  // }
}