import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getAccounts_SEB } from './store/actions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';


class SEBAccountList extends Component {
  constructor(props) {
    super(props);
    this.props.getTheAccounts(this.props.sid);
  }

  render() {
    return (
      <div>
      <List>
        {this.props.accounts.map(x =>
          (
            <ListItem>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText inset primary={x.iban} />
            </ListItem>
          ))}
      </List>
      </div>
    );
  }
}


// Store handling

const mapStateToProps = state => ({
  sid: state.sid,
  accounts: state.accounts,
});

const mapDispatchToProps = dispatch => ({
    getTheAccounts: (sid) => {
      dispatch(getAccounts_SEB(sid));
  },
});

const SEBAccountListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SEBAccountList);

export default withRouter(SEBAccountListContainer);
