import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RootState } from '../state/Store';
import AddAccount from './AddAccount';
import SelectAccount from './SelectAccount';

interface StateProps {
  hasAccounts: boolean;
}

type Props = StateProps;

function Backup(props: Props) {
  return (
      <Switch>
        <Route path='/backup/select-account' component={SelectAccount} />
        <Route path='/backup/add-account' component={AddAccount} />
        <Redirect to='/backup/select-account' />
      </Switch>
  );
}

function mapState(state: RootState): StateProps {
  return {
    hasAccounts: !!state.accounts.length,
  };
}

export default connect(mapState)(Backup);
