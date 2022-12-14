import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Installation() {
  return (
    <PageLayout id="page-installation">
      <h1>Installation</h1>
      <p>Follow these steps to start using PushIn.js in your project.</p>
      <p>For more information, questions, bug reporting or feature requests, checkout the <a href="https://github.com/nateplusplus/pushin" target="_blank" rel="noopener noreferrer nofollow">project on GitHub</a>.</p>
      <h2>Install pushin with NPM or a CDN</h2>
      <p>If you're using npm, you can install the package by running:</p>
      <SyntaxHighlighter language="bash" style={docco}>
        npm install --save pushin
      </SyntaxHighlighter>
      <p>Import assets into your javascript (if using Webpack).</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        import 'pushin/dist/pushin.css';
      </SyntaxHighlighter>
      <p>If not using Webpack, you can import the CSS from node_modules.</p>
      <SyntaxHighlighter language="css" style={docco}>
        @import 'node_modules/pushin/dist/pushin.css';
      </SyntaxHighlighter>
      <p>Alternatively, you can use a CDN:</p>
      <SyntaxHighlighter language="text" style={docco}>
        { `https://unpkg.com/pushin/dist/pushin.min.css\nhttps://unpkg.com/pushin/dist/umd/pushin.min.js` }
      </SyntaxHighlighter>
      <h2>Insert required HTML structure</h2>
      <p>At the most basic level, there are a few things you need to set up on your page in order for this to work properly.</p>
      <p>Use the following example snippet to create a "scene" for the pushin effect.</p>
      <SyntaxHighlighter language="xml" style={docco}>
        {
`<div class="pushin">
  <div class="pushin-scene">
    <div class="pushin-layer">This is the first layer you'll see.</div>
    <div class="pushin-layer">
      This is a second layer, which will be positioned behind the first one.
    </div>
  </div>
</div>`
        }
      </SyntaxHighlighter>
      <h2>Initialize the effect</h2>
      <p>Once you have your HTML set up, you can initialize the effect with <code>pushInStart()</code> which is exported to the global scope.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        pushInStart();
      </SyntaxHighlighter>
      <p>If using the global scope is not best for your project, you can alternatively call the <code>start()</code> method:</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
`import { PushIn } from 'pushin';

const container = document.querySelector('.pushin');
new PushIn(container).start();`
        }
      </SyntaxHighlighter>
    </PageLayout>
  );
}