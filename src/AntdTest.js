import React, { Component } from 'react';
//import Button from 'antd/lib/button';
import {Button} from 'antd'

import './App.css';
import 'antd/dist/antd.css'


class AntApp extends Component {
    render() {
      return (
        <div className ="App">
            <Button type="primary">Primary</Button><br/><br/>
            <Button>Default</Button><br/><br/>
            <Button type="dashed">Dashed</Button><br/><br/>
            <Button type="danger">Danger</Button>
        </div>
      );
    }
  }
  
export default AntApp;

