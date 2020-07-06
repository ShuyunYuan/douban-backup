import {
  Box, Button, Card, Checkbox, Divider, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import contents from '../constants/Contents';
import { Account } from '../state/Slices';
import { RootState } from '../state/Store';

interface StateProps {
  account: Account;
}

interface DispatchProps {
  // TODO
}

type Props = StateProps & DispatchProps;

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  listItemSecondaryActionRoot: {
    right: theme.spacing(3),
  },
  dividerMiddle: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

function SelectContent(props: Props) {
  const [checked, setChecked] = React.useState(() => Object.fromEntries<boolean>(contents.map(it => [it.id, true])));
  const isNoneChecked = Object.values(checked).every(checked => !checked);
  const isAllChecked = Object.values(checked).every(checked => checked);
  const classes = useStyles();
  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setChecked({ ...checked, [event.target.name]: event.target.checked });
  const handleSelectAll = () => setChecked(Object.fromEntries<boolean>(contents.map(it => [it.id, !isAllChecked])))
  if (!props.account) {
    return <Redirect to='select-account' />
  }
  return (
      <Box maxWidth={840}>
        <Card variant='outlined'>
          <Box px={3} pt={4} pb={3}>
            <Typography align='center' component='h2' variant='h5'>
              选择备份内容
            </Typography>
          </Box>
          <Box display='flex' justifyContent='flex-end' px={2}>
            <Button color='primary' onClick={handleSelectAll}>
              {isAllChecked ? '取消全选' : '全选'}
            </Button>
          </Box>
          <List disablePadding>
            {contents.map((content, index) => {
              const ContentIcon = content.icon;
              return (
                  <Box key={content.id}>
                    <ListItem classes={{ root: classes.listItemRoot }}>
                      <ListItemIcon>
                        <ContentIcon style={{ fontSize: 36 }} />
                      </ListItemIcon>
                      <ListItemText primary={content.title} secondary={content.description} />
                      <ListItemSecondaryAction classes={{ root: classes.listItemSecondaryActionRoot }}>
                        <Checkbox
                            checked={checked[content.id]} edge='end' name={content.id}
                            onChange={handleCheckedChange} />
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index !== contents.length - 1 && (
                        <Divider variant='middle' classes={{ middle: classes.dividerMiddle }} />
                    )}
                  </Box>
              );
            })}
          </List>
          <Divider />
          <Box display='flex' px={3} py={2} justifyContent='flex-end'>
            <Button color='primary' disabled={isNoneChecked} variant='contained'>
              开始备份
            </Button>
          </Box>
        </Card>
      </Box>
  );
}

function mapState(state: RootState): StateProps {
  return {
    account: state.accounts[state.backupUsername]!!,
  };
}

export default connect(mapState)(SelectContent);
