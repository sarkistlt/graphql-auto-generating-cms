import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';
import Markmirror from '@revall/react-markmirror';
// import '../editor.css';

const md = new MarkdownIt({
  typographer: true,
  breaks: true,
  linkify: true,
});

class Editor extends Component {
  constructor(props) {
    super(props);

    this.renderPreview = this.renderPreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlerUpload = this.handlerUpload.bind(this);
    this.state = {
      code: props.element ? props.element.value : '',
      element: props.element || null,
    };
  }

  componentDidMount() {
    this.setState({ code: this.state.element.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.element !== this.state.element) {
      this.setState({
        code: nextProps.element ? nextProps.element.value : '',
        element: nextProps.element || null,
        initCode: nextProps.element ? nextProps.element.value : '',
      });
    }
  }

  /**
  * Parses the given markdown into HTML
  *
  * @param {String} markdown The current editor value
  * @return {String}
  */
  renderPreview(markdown) {
    return md.render(markdown);
  }

  handleChange(code) {
    this.setState({ code });
    if (this.state.element) {
      this.state.element.value = code;
    }
  }

  handlerUpload(file) {
    return new Promise((resolve, reject) => {
      this.props
        .upload(file)
        .then((result) => {
          const url = encodeURI(`${this.props.path}/${file.name}`);
          const response = {
            type: file.type,
            url,
            text: file.name,
          };
          console.log(result, response);
          resolve(response);
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  }

  render() {
    const { code, initCode } = this.state;
    return (
      <section>
        {' '}
        <Markmirror
          value={code}
          defaultValue={initCode}
          onChange={this.handleChange}
          onPreview={this.renderPreview}
          acceptedFileTypes={[
            'image/jpg',
            'image/gif',
            'image/png',
            'application/pdf',
            'application',
            'audio',
          ]}
          onFiles={this.handlerUpload}
        />
      </section>
    );
  }
}

export default Editor;
