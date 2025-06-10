import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const defaultMarkdown = `
# Heading (H1)
## Sub Heading (H2)

[Link to freeCodeCamp](https://www.freecodecamp.org)

\`inline code\`

\`\`\`
// code block
function example() {
  return 'Hello World';
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

**Bolded text**

![freeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg)
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    const preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = marked(markdown);
    }
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div id="preview"></div>
      </div>
    </div>
  );
};

export default App;