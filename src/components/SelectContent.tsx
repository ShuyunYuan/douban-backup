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
  account: Account | null;
  itemList: ItemList | null;
  isFetchingItemList: boolean;
  fetchedItemList: ItemList | null;
}

interface DispatchProps {
  fetchUserItemList: (userId: string) => void;
  resetFetchUserItemList: () => void;
  addUserItemList: (args: AddUserItemListArgs) => void;
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
  const isAllChecked = Object.values(checked).every(checked => checked);
  const isNoneChecked = Object.values(checked).every(checked => !checked);
  const classes = useStyles();
  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setChecked({ ...checked, [event.target.name]: event.target.checked });
  const handleSelectAll = () => setChecked(Object.fromEntries<boolean>(contents.map(it => [it.id, !isAllChecked])))
  useEffect(() => {
    if (props.account && !props.itemList && !props.isFetchingItemList) {
      if (props.fetchedItemList) {
        props.resetFetchUserItemList();
        props.addUserItemList({ userId: props.account.user.id, itemList: props.fetchedItemList });
      } else {
        // TODO: Handle error instead of keep retrying.
        props.fetchUserItemList(props.account.user.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isFetchingItemList, props.fetchedItemList]);
  if (!props.account) {
    return <Redirect to='select-account' />
  }
  return (
      <Box maxWidth={840}>
        <Card variant='outlined'>
          <Box paddingX={3} paddingTop={4} paddingBottom={3}>
            <Typography align='center' component='h2' variant='h5'>
              选择备份内容
            </Typography>
          </Box>
          <Box position='relative'>
            <Box visibility={!!props.itemList ? 'visible' : 'hidden'}>
              <Box display='flex' justifyContent='flex-end' paddingX={2}>
                <Button color='primary' onClick={handleSelectAll}>
                  {isAllChecked ? '取消全选' : '全选'}
                </Button>
              </Box>
              <List disablePadding>
                {contents.map((content, index) => {
                  const ContentIcon = content.icon;
                  const contentDescription = props.itemList ? content.description({
                    user: props.account!!.user,
                    itemList: props.itemList,
                  }) : '';
                  return (
                      <Box key={content.id}>
                        <ListItem classes={{ root: classes.listItemRoot }}>
                          <ListItemIcon>
                            <ContentIcon style={{ fontSize: 36 }} />
                          </ListItemIcon>
                          <ListItemText
                              primary={content.title}
                              secondary={contentDescription} />
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
              <Box display='flex' paddingX={3} paddingY={2} justifyContent='flex-end'>
                <Button color='primary' disabled={isNoneChecked} variant='contained'>
                  开始备份
                </Button>
              </Box>
            </Box>
            <Box
                position='absolute' left={0} right={0} top={0} bottom={0}
                display={props.isFetchingItemList ? 'flex' : 'none'} alignItems='center' justifyContent='center'>
              <CircularProgress thickness={4} />
            </Box>
          </Box>
        </Card>
      </Box>
  );
}

function mapState(state: RootState): StateProps {
  const account = state.accounts[state.backupUsername];
  return {
    account: account,
    itemList: account && state.userItemLists[account.user.id],
    isFetchingItemList: state.fetchUserItemList.isPending,
    fetchedItemList: state.fetchUserItemList.itemList,
  };
}

const mapDispatch: DispatchProps = {
  fetchUserItemList,
  resetFetchUserItemList,
  addUserItemList,
}

export default connect(mapState, mapDispatch)(SelectContent);
