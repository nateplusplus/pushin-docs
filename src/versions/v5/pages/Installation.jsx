import { useState } from 'react';
import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  Tabs,
  Tab,
  Alert
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Installation() {
  const [ tabValue, setTabValue ] = useState(0);

  const handleTabChange = ( event, newValue ) => {
    setTabValue( newValue );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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
      <Alert severity='warning'>Note: It is best practice to include the version in your CDN URL (this comes after the @ symbol in the URL). This will avoid sudden changes in the event that major updates are rolled out.</Alert>

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

      <h2>Initializing the effect</h2>
      <p>Depending on your project, there are a few ways you can initialize this effect. Choose the one that is best for you below.</p>

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label='Minimal' { ...a11yProps(0) } />
        <Tab label='JavaScript' { ...a11yProps(1) } />
        <Tab label='React' { ...a11yProps(2) } />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <div>
          <p>If you're using the CDN, you can use the helper function <code>pushInStart()</code> to start the effect. This is ideal for a minimal setup that does not require settings or configurations. However, this may not be compatible with all projects, such as those that use modular JavaScript imports or React.</p>
          <SyntaxHighlighter language="html" style={docco}>
            {
`<script language="text/javascript">
  pushInStart();
</script>`
            }
          </SyntaxHighlighter>
          <Alert severity='warning'>IMPORTANT: Only call this function once on the page, even if adding more than one PushIn effect. This function will initialize <strong><em>all PushIn effects</em></strong> on the current page.</Alert>
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <div>
          <p>Once you have your HTML set up, you can initialize the effect by creating a new instance of <code>PushIn()</code>. You can optionally pass settings into PushIn when instantiating (see full <a href="/api">API documentation</a> for details). Once instantiated, to begin the effect, call the <code>start()</code> method.</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {
`import { PushIn } from 'pushin';
import 'pushin/dist/pushin.css';

const options = {
  // Optionally pass settings to PushIn here (See API documentation).
};

const container = document.querySelector('.pushin');
new PushIn(container, options).start();`
            }
          </SyntaxHighlighter>

          <Alert severity="info">You can initialize multiple instances of PushIn on a single page without risk of collision or conflict.</Alert>
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <div>
          <p>For React projects, you will need to use the <code>useRef</code> and <code>useLayoutEffect</code> hooks. You can optionally pass settings into PushIn when instantiating (see full <a href="/api">API documentation</a> for details).</p>
          <p>You will also want to call the <code>destroy()</code> method to prevent PushIn from persisting across your SPA when not in use.</p>
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
    <div ref={pushInContainer} className="pushin">
      <div className="pushin-layer">Test</div>
      { // more layers here... }
    </div>
  )
}
`
            }
          </SyntaxHighlighter>
          <Alert severity="info">You can initialize multiple instances of PushIn on a single page without risk of collision or conflict.</Alert>
        </div>
      </TabPanel>

    </PageLayout>
  );  
}