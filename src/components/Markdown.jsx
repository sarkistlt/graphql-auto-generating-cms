import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onEdit(this.textarea);
  }

  render() {
    const { label, id, value } = this.props;

    return (
      <div>
        <div className="field">
          <label style={{ fontWeight: 'bold' }}>{label}</label>
          <textarea
            id={id}
            value={value}
              disabled
            ref={(textarea) => {
              this.textarea = textarea;
            }}
          />
        </div>
        <Button
          content="edit"
          icon="write"
          labelPosition="right"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Markdown;
