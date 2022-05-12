import React, { Component } from 'react'
import Dashboard2 from './Dashboard2'
import Footerv2 from './Footerv2'
import Headerv2 from './Headerv2'
import Menuv2 from './Menuv2'

export default class Dashboardv2 extends Component {
  render() {
    return (
        <div className="wrapper">
          <Headerv2/>
          <Menuv2/>
          <Dashboard2/>
          <Footerv2/>
</div>

    )
  }
}
