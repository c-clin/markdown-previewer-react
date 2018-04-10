import React, { Component } from 'react';
import Marked from 'marked';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      markdown: "# Heading\n### Sub-Heading\n##### Even Smaller Heading\n\nOrdered list: \n1. Apples \n2. Bananas \n3. Pears\n\nUnordered list:\n* Apples \n* Bananas \n* Pears\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 | \n\n*[Catherine Lin](https://github.com/c-clin)*"
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

            <h1>Markdown</h1>
            <textarea
              id="markdown-textarea"  
              placeholder="#markdown language"
              autoFocus
              onChange={this.updateMarkdown.bind(this)}
              value={this.state.markdown}
            />
          </div>

          <div className="preview">
            <h1>Preview</h1>
              <hr />
              <div id="preview-content" dangerouslySetInnerHTML = {{__html: Marked(this.state.markdown)}}>
              </div>
          </div>  

        </div>
      </div>
    );
  }
}

export default App;
