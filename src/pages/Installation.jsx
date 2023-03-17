import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Installation() {
  return (
    <PageLayout id="page-installation">
      <h1>Installation</h1>
      <p className="lead">Follow these steps to start using PushIn.js in your project.</p>
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
        { `https://cdn.jsdelivr.net/npm/pushin@5/dist/pushin.min.css\nhttps://cdn.jsdelivr.net/npm/pushin@5/dist/umd/pushin.min.js` }
      </SyntaxHighlighter>
      <p><strong>Note: It is best practice to include the version in your CDN URL (this comes after the @ symbol in the URL). This will avoid sudden changes in the event that major updates are rolled out.</strong></p>
      <h2>Insert required HTML structure</h2>
      <p>At the most basic level, there are a few things you need to set up on your page in order for this to work properly.</p>
      <p>Use the following example snippet to create a "scene" for the pushin effect.</p>
      <SyntaxHighlighter language="xml" style={docco}>
        {
`<div class="pushin">
  <div class="pushin-layer">This is the first layer you'll see.</div>
  <div class="pushin-layer">Each subsequent layer will be positioned behind the previous.</div>
  <!-- Insert as many layers as desired for your scene. -->
</div>`
        }
      </SyntaxHighlighter>
      <h2>Initializing the effect (Vanilla JavaScript)</h2>
      <p>Once you have your HTML set up, you can initialize the effect by calling the <code>start()</code> method.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
`import { PushIn } from 'pushin';
import 'pushin/dist/pushin.css';

const container = document.querySelector('.pushin');
new PushIn(container).start();`
        }
      </SyntaxHighlighter>
      <h2>Initializing the effect (React.js)</h2>
      <p>For React projects, you will need to use the `useRef` and `useLayoutEffect` hooks. You will also want to call the `destroy()` method to prevent PushIn from persisting across your SPA when not in use.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
`import { useLayoutEffect, useRef } from "react";
import { PushIn } from 'pushin';
import 'pushin/dist/pushin.css';

export default function MyComponent() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
    const options = {
      // Optionally pass settings to PushIn here (See API documentation).
    };

    const pushIn = new PushIn(pushInContainer.current, options);
    pushIn.start();
    return () => pushIn.destroy();
  });

  return (
    <div className="pushin">
      <div className="pushin-layer">Test</div>
      { // more layers here... }
    </div>
  )
}
`
        }
      </SyntaxHighlighter>
      <h2>Minimal setup with helper function</h2>
      <p>Alternatively, you can use the helper function <code>pushInStart()</code> which is exported to the global scope. This does not work well for all projects, particularly React based projects, but it can be useful for some cases when a simple setup is desired.</p>
      <SyntaxHighlighter language="html" style={docco}>
        {
`<div class="pushin">
  <div class="pushin-layer">Test</div>
  <!-- More layers here... -->
</div>
<script language="text/javascript">
  pushInStart();
</script>`
        }
      </SyntaxHighlighter>
    </PageLayout>
  );  
}