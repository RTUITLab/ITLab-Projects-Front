import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IssueLabels from './IssueLabels';

export default class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.showDetailed = this.showDetailed.bind(this);
    this.state = { detailed: false };
  }

  showDetailed() {
    this.setState({
      detailed: !this.state.detailed,
    });
  }

  render() {
    const createdAtDate = new Date(this.props.issue.created_at).toLocaleDateString();
    const closedAtDate = new Date(this.props.issue.closed_at).toLocaleDateString();

    return (
      <div className="issue card mb-4 shadow-sm">
        <h4><a href={`${this.props.issue.html_url}`}>{this.props.issue.title}</a></h4>
        <div className="text-muted">
          открыт
          {' '}
          <a href={`${this.props.issue.user.html_url}`}>{this.props.issue.user.login}</a>
          <img className="avatar" src={this.props.issue.user.avatar_url} alt={this.props.issue.user.login} />
        </div>
        <IssueLabels labels={this.props.issue.labels}/>
        {this.state.detailed ? (
          <div className="issue-more-info">
            <div className="issue-label">Описание</div>
            <div className="issue-description">{this.props.issue.body}</div>
            <div className="issue-label">Дата создания</div>
            <div className="issue-date">{createdAtDate}</div>
            {closedAtDate === 'Invalid Date' ? '' : (
              <div>
                <div className="issue-label">Дата закрытия</div>
                <div className="issue-date">{closedAtDate}</div>
              </div>
            )}

          </div>
        ) : ''}
        <div className="issue-more-button">
          {this.props.issue.body ? this.state.detailed ? <FontAwesomeIcon onClick={this.showDetailed} icon="chevron-up" />
            : <FontAwesomeIcon onClick={this.showDetailed} icon="chevron-down" /> : ''}
        </div>
      </div>
    );
  }
}
