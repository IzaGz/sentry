import React from 'react';
import IssueList from '../components/issueList';
import {t} from '../locale';


const UserAssigned = React.createClass({
  render() {
    let params = this.props.params;
    return (
      <div>
        <IssueList
          title={t('Assigned')}
          endpoint={`/organizations/${params.orgId}/members/${params.userId}/issues/assigned/`}
          params={{orgId: params.orgId}} />
      </div>
    );
  }
});

export default UserAssigned;