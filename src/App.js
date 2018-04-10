import React, { Component } from 'react';
import Marked from 'marked';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      markdown: "# H1 \n ## H2 \n ### H3 \n #### H4 \n ##### H5 \n ###### H6"
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
              rows="25"
              cols="80"
              placeholder="#markdown language"
              onChange={this.updateMarkdown.bind(this)}
              value={this.state.markdown}
            />
          </div>

          <div className="preview">
            <h1>Preview</h1>
              <div dangerouslySetInnerHTML = {{__html: Marked(this.state.markdown)}}>
              </div>
          </div>  

        </div>
      </div>
    );
  }
}

export default App;
