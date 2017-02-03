import React from 'react';
import {
  Button, Form, Input,
} from 'react-lightning-design-system';

export default () => (
  <div>
    {/* PRIMARY CONTENT WRAPPER */}

      {/* CREATE NEW ACCOUNT */}
      <div aria-labelledby="newaccountform">

        {/* CREATE NEW ACCOUNT FORM */}
        <form className="slds-form--stacked" id="add-account-form">
          {/* BOXED AREA */}
          <fieldset className="slds-box slds-theme--default slds-container--small">

            <legend id="newaccountform" className="slds-text-heading--medium slds-p-vertical--medium">Add a new account</legend>

            <div className="slds-form-element">
              <label className="slds-form-element__label" htmlFor="account-name">Name</label>
              <div className="slds-form-element__control">
                <input id="account-name" className="slds-input" type="text" placeholder="New account"/>
              </div>
            </div>
            <button className="slds-button slds-button--brand slds-m-top--medium" type="submit">Create Account</button>
          </fieldset>
          {/* / BOXED AREA */}
        </form>
        {/* CREATE NEW ACCOUNT FORM */}

      </div>
      {/* / CREATE NEW ACCOUNT */}
    </div>
);
