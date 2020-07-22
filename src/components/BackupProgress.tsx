import {
  Box, Button, Card, Checkbox, CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ItemList } from '../api';

import contents from '../constants/Contents';
import {
  Account, addUserItemList, AddUserItemListArgs, fetchUserItemList, resetFetchUserItemList,
} from '../state/Slices';
import { RootState } from '../state/Store';

interface StateProps {
  account: Account;
  itemList: ItemList;
}

interface DispatchProps {
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

function BackupProgress(props: Props) {
  return (
      <Box maxWidth={840}>
        <Card variant='outlined'>
          <Box paddingX={3} paddingTop={4} paddingBottom={3}>
            <Typography align='center' component='h2' variant='h5'>
              正在备份
            </Typography>
          </Box>
          <Box paddingX={3}>
            <Typography component='h3' variant='h6'>
              {/*{props.account.user.name}*/}
              朱玟
            </Typography>
            <Typography variant='body2'>
              个人资料、关注列表、日记、评论、相册、豆列、读书、电影、音乐
            </Typography>
            <Typography variant='body2'>
              开始时间：2020年7月10日 23:06:04
            </Typography>
            <Divider />
          </Box>
          <Box display='flex' paddingX={3} paddingY={2} justifyContent='flex-end'>
            <Button color='primary' variant='contained'>
              开始备份
            </Button>
          </Box>
        </Card>
      </Box>
  );
}

function mapState(state: RootState): StateProps {
  const account = state.accounts[state.backupUsername];
  // return {
  //   account,
  //   itemList: state.userItemLists[account.user.id],
  // };
  return {
    account: null as unknown as Account,
    itemList: null as unknown as ItemList,
  };
}

const mapDispatch: DispatchProps = {
}

export default connect(mapState, mapDispatch)(BackupProgress);
