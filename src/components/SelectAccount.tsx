import { replace } from 'connected-react-router';
import { Avatar, Box, Card, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PersonAddOutlined } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { Account, setBackupUsername } from '../state/Slices';
import { RootState } from '../state/Store';

interface StateProps {
  accounts: Account[];
}

interface DispatchProps {
  setBackupUsername: (username: string) => void;
  replace: (location: string) => void;
}

type Props = StateProps & DispatchProps;

const useStyles = makeStyles(theme => ({
  listItemRoot: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  dividerMiddle: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

function SelectAccount(props: Props) {
  const classes = useStyles();
  const handleAccountClick = (event: React.MouseEvent<HTMLDivElement>) => {
    props.setBackupUsername(event.currentTarget.dataset.username!!);
    props.replace('select-content');
  };
  if (!props.accounts.length) {
    return <Redirect to='add-account' />;
  }
  return (
      <Box maxWidth={480}>
        <Card variant='outlined'>
          <Box paddingX={3} paddingTop={4} paddingBottom={2}>
            <Typography align='center' component='h2' variant='h5'>
              选择豆瓣帐号
            </Typography>
          </Box>
          <List>
            {props.accounts.map(account => (
                <Box key={account.username}>
                  <ListItem
                      button data-username={account.username} classes={{ root: classes.listItemRoot }}
                      onClick={handleAccountClick}>
                    <ListItemIcon>
                      <Avatar alt={account.user.name} src={account.user.large_avatar} />
                    </ListItemIcon>
                    <ListItemText primary={account.user.name} secondary={account.username} />
                  </ListItem>
                  <Divider variant='middle' classes={{ middle: classes.dividerMiddle }} />
                </Box>
            ))}
            <ListItem button component={NavLink} classes={{ root: classes.listItemRoot }} to='add-account'>
              <ListItemIcon>
                <Box marginLeft={1} display='flex'>
                  <PersonAddOutlined />
                </Box>
              </ListItemIcon>
              <ListItemText primary='添加其他账号' />
            </ListItem>
          </List>
        </Card>
      </Box>
  );
}

function mapState(state: RootState): StateProps {
  return {
    accounts: Object.values(state.accounts),
  };
}

const mapDispatch: DispatchProps = {
  setBackupUsername,
  replace,
};

export default connect(mapState, mapDispatch)(SelectAccount);
