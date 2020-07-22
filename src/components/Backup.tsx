import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RootState } from '../state/Store';
import AddAccount from './AddAccount';
import BackupProgress from './BackupProgress';
import SelectAccount from './SelectAccount';
import SelectContent from './SelectContent';

interface StateProps {}

type Props = StateProps;

function Backup(props: Props) {
  return (
      <Switch>
        <Route path='/backup/select-account' component={SelectAccount} />
        <Route path='/backup/add-account' component={AddAccount} />
        <Route path='/backup/select-content' component={SelectContent} />
        <Route path='/backup/progress' component={BackupProgress} />
        <Redirect to='/backup/select-account' />
      </Switch>
  );
}

function mapState(state: RootState): StateProps {
  return {};
}

export default connect(mapState)(Backup);
