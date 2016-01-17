import './HelloWorld.scss';
import React from 'react';
import FooBar from 'shared-react/Components/FooBar/FooBar.js';
import $ from 'jquery';


class HelloWorld extends React.Component {
  componentDidMount() {
  	console.log($('.hello-world'));
  }
  render() {
    return <div className="hello-world">Hello {this.props.name}
    	<FooBar><div className="TEST">TETE</div></FooBar>
    </div>;
  }
};

HelloWorld.defaultProps = {
  name: 'World'
};

export default HelloWorld;
