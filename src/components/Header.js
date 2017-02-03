/* eslint-disable jsx-quotes */

import React from 'react';

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderHeadingTitle,
  Button,
  ButtonGroup,
  Grid,
} from 'react-lightning-design-system';

export default () => (
  <div>
    <h2 className="slds-text-heading--label slds-m-bottom--small">Salesforce Lightning Design System Trailhead Module</h2>
    <PageHeader>
      <PageHeaderHeading
        legend="ACCOUNTS"
        title={(
          <Grid vertical={false}>
            <PageHeaderHeadingTitle>
              My Accounts
            </PageHeaderHeadingTitle>
          </Grid>
        )}
        info="COUNT items"
        rightActions={[
          <ButtonGroup key={0} className="slds-button-space-left">
            <Button type="neutral">New Account</Button>
          </ButtonGroup>,
        ]}
      />
    </PageHeader>
  </div>
);
