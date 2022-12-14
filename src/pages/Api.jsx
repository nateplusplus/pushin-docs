import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Api() {
  return (
    <PageLayout id="page-api">
      <h1>PushIn API Reference</h1>
      <p>For more information, questions, bug reporting or feature requests, checkout the <a href="https://github.com/nateplusplus/pushin" target="_blank" rel="noopener noreferrer nofollow">project on GitHub</a>.</p>
      <h2>PushIn Full HTML Layout</h2>
      <SyntaxHighlighter language="xml" style={docco}>
        {
          `<div class="pushin">
  <div class="pushin-scene">
    <div class="pushin-composition">
      <div class="pushin-layer">layer 1</div>
      <div class="pushin-layer">layer 2</div>
    </div>
  </div>
</div>`
        }
      </SyntaxHighlighter>
      <h2>JavaScript and HTML configuration</h2>
      <p>For ultimate flexibility, PushIn can be configured in a couple ways: through the JavaScript API, and/or through data-attributes within the HTML. When using both in combination, the HTML attributes will take precedence.</p>
      <h2>JavaScript API</h2>
      <p>Pass in a configuration object to the effect contstructor, whether you are using <code>pushInStart()</code> or <code>new PushIn()</code>.</p>
      <p>The example below demonstrates how you can configure PushIn using the JavaScript API.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
          `const config = {
  target: document.querySelector('#my-target'),
  scene: {
    breakpoints: [768, 1440, 1920, 2560],
    inpoints: [200, 300],
    ratio: [1, 2],
  },
  layers: [
    // Layer 1
    {
      inpoints: [100, 300],
      outpoints: [300, 600],
      speed: 25
    },
    // Layer 2...
  ],
};

// Using global function
pushInStart(config);

// Using class constructor
new PushIn(config);`
        }
      </SyntaxHighlighter>
      <h2>HTML attributes</h2>
      <p>Alternatively, use HTML data-attributes as needed.</p>
      <p><strong>NOTE: Any attributes added within the HTML markup will take precedence over configurations in the JavaScript API.</strong></p>
      <p>The example below demonstrates how you can use the HTML data-attributes to configure PushIn.</p>
      <SyntaxHighlighter language="xml" style={docco}>
        {
          `<div class="pushin" data-pushin-target="#my-target">
  <div class="pushin-scene"
      data-pushin-breakpoints="768,1440,1920,2560"
      data-pushin-inpoints="200,300">
    <div class="pushin-composition"
        data-pushin-ratio="1,2">
      <!-- layer 1 -->
      <div class="pushin-layer"
        data-pushin-from="100,300"
        data-pushin-to="300,600"
        data-pushin-speed="25">
        <!-- content -->
      </div>
      <!-- layer 2... -->
    </div>
  </div>
</div>`
        }
      </SyntaxHighlighter>
      <h2>Modules</h2>
      <p>Each component of the PushIn plugin has its own set of configurations, separated into modules below.</p>
      <h3>pushin (top level) | <code>.pushin</code></h3>
      <h3>scene | <code>.pushin-scene</code></h3>
      <h3>composition | <code>.pushin-composition</code></h3>
      <h3>layers | <code>.pushin-layer</code></h3>
    </PageLayout>
  );
}