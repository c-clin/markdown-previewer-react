import React, { Component } from 'react';
import Marked from 'marked';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      markdown: "# Heading\n### Sub-Heading\n##### Even Smaller Heading\n\nOrdered list: \n1. Apples \n2. Bananas \n3. Pears\n\nUnordered list:\n* Apples \n* Bananas \n* Pears\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |"
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

            <label><h1>Markdown</h1></label>
            <br />
            <textarea
              id="markdown-textarea"  
              placeholder="#markdown language"
              autofocus
              onChange={this.updateMarkdown.bind(this)}
              value={this.state.markdown}
            />
          </div>

          <div className="preview">
            <h1>Preview</h1>
              <div id="preview-content" dangerouslySetInnerHTML = {{__html: Marked(this.state.markdown)}}>
              </div>
          </div>  

        </div>
      </div>
    );
  }
}

export default App;
