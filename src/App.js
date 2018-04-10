import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      markdown: ""
    }
  }

  updateMarkdown(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="markdown">
            <label>Markdown</label>
            <br />
            <textarea
              id="markdown-textarea"
              placeholder="#markdown language"
              onChange={this.updateMarkdown.bind(this)}
              value={this.state.markdown}

            />
          </div>

          <div className="preview">
            <h1>Preview</h1>
              {this.state.markdown}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
