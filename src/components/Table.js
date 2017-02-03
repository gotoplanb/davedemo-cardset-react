import React from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from 'react-lightning-design-system';

export default () => (
  <div className="slds-m-top--medium">
    <Table
      bordered
      noRowHover
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Account ID</TableHeaderColumn>
          <TableHeaderColumn>Account name</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableRowColumn>123</TableRowColumn>
          <TableRowColumn>Account 1</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>456</TableRowColumn>
          <TableRowColumn>Account 2</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
