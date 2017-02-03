/* eslint-disable jsx-quotes */

import React from 'react';

import {
  Grid,
  Row,
  Col,
} from 'react-lightning-design-system';

export default () => (
  <div>
    <footer role="contentinfo" className="slds-p-around--large">
      <Grid>
        <Row align="spread">
          <Col>Salesforce Lightning Design System Example</Col>
          <Col>&copy; Your Name Here</Col>
        </Row>
      </Grid>
    </footer>
  </div>
);
