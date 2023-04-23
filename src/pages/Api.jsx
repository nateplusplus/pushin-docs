import { useState } from 'react';

import PageLayout from "../components/PageLayout";
import TabPanel from '../components/Tabpanel';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Alert,
  AlertTitle,
  Button,
  IconButton
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';

export default function Api() {
  const [htmlTabValue, setHtmlTabValue] = useState(0);
  const [configTabValue, setConfigTabValue] = useState(0);

  function tabA11yProps(section, index) {
    return {
      id: `${section}-tab-${index}`,
      'aria-controls': `${section}-tabpanel-${index}`,
    };
  }

  function createTable(rows) {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sx={{ minWidth: '250px' }}>HTML Attribute</TableCell>
              <TableCell>Type</TableCell>
              <TableCell sx={{ minWidth: '325px' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>{row.name}</strong>
                </TableCell>
                <TableCell>{row.attr}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.val}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function createData(
    name,
    attr,
    type,
    val,
    options,
    description,
  ) {
    return { name, attr, type, val, options, description };
  }

  const pushinRows = [
    createData(
      'debug',
      'none',
      <code>boolean</code>,
      <><p>Enables a tool to display the current scroll position which can help with animation timing.</p><p><strong>Default:</strong> <code>false</code></p></>
    ),

    createData(
      'selector',
      'none',
      <code>string</code>,
      <><p>If you are using the global <code>pushInStart()</code> function to create multiple instances of PushIn on one page, and you need to supply specific configurations to each instance, use this option to target a specific element (or multiple elements) as the PushIn container(s).</p><p><strong>Note:</strong> If using the <code>new PushIn()</code> class constructor, you will pass an element in as the first parameter, so this option is unnecessary and will be ignored.</p><p><strong>Default:</strong> <code>'.pushin'</code></p></>),

    createData(
      'target',
      <code>data-pushin-target</code>,
      <code>string</code>,
      <><p>JavaScript selector used to attach PushIn to an element on the page.</p><p><strong>Default:</strong> <code>undefined</code></p></>
    ),

    createData(
      'scrollTarget',
      <code>data-pushin-scroll-target</code>,
      <code>string</code>,
      <><p>JavaScript selector used to bind scroll events. Use the string "window" to bind scroll events to the Window object, regardless of which element is the target.</p><p><strong>Default:</strong> <code>'window'</code></p></>
    ),

    createData(
      'mode',
      <code>data-pushin-mode</code>,
      <code>string</code>,
      <><p>Specify how PushIn layers should be displayed.</p><p><strong>Options:</strong><ul><li><code>continuous</code> - display all layers continuously throughout the animation.</li><li><code>sequential</code> - display layers in a sequence, one after another.</li></ul></p><p><strong>Default:</strong> <code>'sequential'</code></p></>
    ),

    createData(
      'autoStart',
      <code>data-pushin-auto-start</code>,
      <code>string</code>,
      <><p>Automatically begin animating the effect based on where the PushIn container is while scrolling.</p> <p><strong>Options:</strong><ul><li><code>scroll</code> - begin animating immediately when the user begins scrolling.</li><li><code>screen-top</code> - begin animating when the top of the PushIn container aligns with the top of the browser.</li><li><code>screen-bottom</code> - begin animating when the top of the PushIn container aligns with the bottom of the browser.</li></ul></p><p><strong>Default:</strong> <code>'scroll'</code></p></>
    ),

    createData(
      'length',
      <code>data-pushin-length</code>,
      <code>number</code>,
      <><p>Alias for <code>layerDepth</code>. When an inpoint and outpoint are not provided for a layer, PushIn will use this number to calculate how long the layer should animate when scrolling. If used in combination with 'continuous' mode, it can indicate how long the effect should scroll on the page.</p><p><strong>Default:</strong> <code>1000</code></p></>
    ),
  ];

  const sceneRows = [
    createData(
      'breakpoints',
      <code>data-pushin-breakpoints</code>,
      <code>array</code>,
      <><p>Provide an array of numbers to configure appropriate responsive design breakpoints. If using the data attribute, use a comma-separated string.</p><p><strong>Default:</strong> <code>[0,768,1440,1920]</code></p></>
    ),

    createData(
      'inpoints',
      <code>data-pushin-from</code>,
      <code>number|array</code>,
      <><p>A single number, or an array of numbers representing the screen position at which the scene should begin animating.</p><p>Providing an array of numbers will set a different inpoint for each corresponding breakpoint, used for responsive design.</p><p>If using the <strong>data attribute</strong>, provide a comma-separated string to represent an array.</p><p><strong>Default:</strong> <code>0</code></p></>
    ),

    createData(
      'layerDepth',
      <code>data-pushin-layer-depth</code>,
      <code>number</code>,
      <><p>When an inpoint and outpoint are not provided for a layer, PushIn will use this number to calculate how long the layer should animate when scrolling.</p><p><strong>Default:</strong> <code>1000</code></p></>
    ),
  ];

  const compositionRows = [
    createData(
      'ratio',
      <code>data-pushin-ratio</code>,
      <code>array</code>,
      <><p><strong>Caution: Use sparingly!</strong> Changing this setting is not recommended. Set an aspect ratio for your scene to determine the width and height of each layer.</p><p>The aspect ratio is represented as an array. Example: a 2:1 ratio can be represented as array: <code>[2,1]</code>.</p><p>If using the <strong>data attribute</strong>, pass in a comma-separated string. Example: <code>'2,1'</code>.</p><p><strong>Default:</strong> <code>1,2</code></p></>
    ),
  ];

  const layerRows = [
    createData(
      'inpoints',
      <code>data-pushin-from</code>,
      <code>number|array</code>,
      <><p>A single number, or an array of numbers representing the screen position at which the layer should <strong>start</strong> animating.</p><p>Providing an array of numbers will set a different inpoint for each corresponding breakpoint, used for responsive design.</p><p>If using the <strong>data attribute</strong>, provide a comma-separated string to represent an array.</p><p><strong>Default:</strong> <code>undefined</code></p></>
    ),

    createData(
      'outpoints',
      <code>data-pushin-to</code>,
      <code>string</code>,
      <><p>A single number, or an array of numbers representing the screen position at which the layer should <strong>stop</strong> animating.</p><p>Providing an array of numbers will set a different outpoint for each corresponding breakpoint, used for responsive design.</p><p>If using the <strong>data attribute</strong>, provide a comma-separated string to represent an array.</p><p><strong>Default:</strong> <code>undefined</code></p></>
    ),

    createData(
      'speed',
      <code>data-pushin-speed</code>,
      <code>number</code>,
      <><p>A number representing how fast or slow the layer should grow or shrink during scroll events.</p><p><strong>Default:</strong> <code>8</code></p></>
    ),

    createData(
      'transitions',
      <code>data-pushin-transitions</code>,
      <code>boolean</code>,
      <><p>Whether to fade in or out when the layer is not active. Setting this to <code>false</code> will turn off both start and end transitions.</p><p><strong>Note:</strong> By default, the first layer does not fade in, and the last layer does not fade out.</p><p><strong>Default:</strong> <code>false</code> for first and last layers, <code>true</code> for all layers in between</p></>
    ),

    createData(
      'transitionStart',
      <code>data-pushin-transition-start</code>,
      <code>number</code>,
      <><p>Duration of the fade-in effect after the layer becomes active (in pixels).</p><p><strong>Note:</strong> Use <code>-1</code> to turn off the start transition only (does not affect end transition).</p><p><strong>Default:</strong> <code>200</code></p></>
    ),

    createData(
      'transitionEnd',
      <code>data-pushin-transition-end</code>,
      <code>number</code>,
      <><p>Duration of the fade-out effect before the layer becomes inactive (in pixels).</p><p><strong>Note:</strong> Use <code>-1</code> to turn off the end transition only (does not affect start transition).</p><p><strong>Default:</strong> <code>200</code></p></>
    ),
  ];

  function copyAnchor(anchor) {
    const link = window.location;
    link.hash = anchor;
    navigator.clipboard.writeText(link.toString());
  }

  return (
    <PageLayout id="page-api">
      <h1>PushIn API Reference</h1>
      <p className="lead">For more information, questions, bug reporting or feature requests, checkout the <a href="https://github.com/nateplusplus/pushin" target="_blank" rel="noopener noreferrer nofollow">project on GitHub</a>.</p>
      <h2>PushIn HTML Structure</h2>
      <Tabs value={htmlTabValue} onChange={(e, val) => setHtmlTabValue(val)}>
        <Tab label='Minumum Required HTML' { ...tabA11yProps('html', 0) } />
        <Tab label='Full HTML Structure' { ...tabA11yProps('html', 1) } />
      </Tabs>

      <TabPanel value={htmlTabValue} index={0}>
        <p>For most applications, the following minimal HTML structure can be used.</p>
        <Alert severity='info'>Note that PushIn may automatically generate additional HTML markup as needed.</Alert>
        <SyntaxHighlighter language="xml" style={docco}>
          {
          `<div class="pushin">
  <div class="pushin-layer">layer 1</div>
  <div class="pushin-layer">layer 2</div>
</div>`
          }
        </SyntaxHighlighter>
      </TabPanel>
      <TabPanel value={htmlTabValue} index={1}>
        <p>Some more advanced features (ie. Composition) may require additional HTML structure. The following is an example of all possible HTML elements that can be used by PushIn.js.</p>
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
      </TabPanel>

      <h2>JavaScript and HTML configuration</h2>
      <p>For ultimate flexibility, PushIn can be configured in a couple ways: through the JavaScript API, and/or through <code>data-*</code> attributes within the HTML. When using both in combination, <strong>data attributes will take precedence</strong>.</p>

      <Tabs value={configTabValue} onChange={(e, val) => setConfigTabValue(val)}>
        <Tab label='JavaScript API' { ...tabA11yProps('config', 0) } />
        <Tab label='HTML Data Attributes' { ...tabA11yProps('config', 1) } />
      </Tabs>

      <TabPanel value={configTabValue} index={0}>
        <p>Pass a configuration object into the contstructor, whether you are using <code>pushInStart()</code> or <code>new PushIn()</code>.</p>
        <p>The example below demonstrates how you can configure PushIn using the JavaScript API.</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {
              `var config = {
  target: document.querySelector('#my-target'),
  scene: {
    breakpoints: [768, 1440, 1920],
    inpoints: [200, 300],
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

// Method 1: Using global function
pushInStart(config);

// Method 2: Using class constructor
new PushIn(config);`
          }
        </SyntaxHighlighter>
      </TabPanel>
      <TabPanel value={configTabValue} index={1}>
        <Alert severity="info">
          <AlertTitle>What are data attibutes?</AlertTitle>
          <p>HTML data attributes are considered a best practice for storing extra information on standard, semantic HTML elements.</p>
          <Button href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank" variant="text" endIcon={<OpenInNewIcon/>}>Learn more about data attributes</Button>
        </Alert>

        <p>You can configure <em>most</em> PushIn settings using data attributes within the HTML markup. The example below demonstrates how you can use the HTML data-attributes to configure PushIn.</p>
        <SyntaxHighlighter language="xml" style={docco}>
          {
            `<div class="pushin" data-pushin-target="#my-target">
  <div class="pushin-scene"
      data-pushin-breakpoints="768,1440,1920"
      data-pushin-inpoints="200,300">
    <!-- layer 1 -->
    <div class="pushin-layer"
      data-pushin-from="100,300"
      data-pushin-to="300,600"
      data-pushin-speed="25">
      <!-- content -->
    </div>
    <!-- layer 2... -->
  </div>
</div>`
          }
        </SyntaxHighlighter>
        <Alert severity='warning'>Any attributes added within the HTML markup will take precedence over configurations in the JavaScript API.</Alert>
      </TabPanel>

      <h2>Settings & Configurations</h2>
      <p>Each component of the PushIn plugin has its own set of configurations, separated into modules below.</p>
      <h3 id="pushin">
        <IconButton aria-label="Copy anchor link to 'PushIn' section." onClick={() => copyAnchor('pushin')}><LinkIcon /></IconButton>
        pushin (top level) | <code>{`<div class="pushin">`}</code>
      </h3>
      { createTable( pushinRows ) }
      <h3 id="scene">
        <IconButton aria-label="Copy anchor link to 'scene' section." onClick={() => copyAnchor('scene')}><LinkIcon /></IconButton>
        scene | <code>{`<div class="pushin-scene">`}</code>
      </h3>
      { createTable( sceneRows ) }
      <h3 id="composition">
        <IconButton aria-label="Copy anchor link to 'composition' section." onClick={() => copyAnchor('composition')}><LinkIcon /></IconButton>
        composition | <code>{`<div class="pushin-composition">`}</code>
      </h3>
      { createTable( compositionRows ) }
      <h3 id="layers">
        <IconButton aria-label="Copy anchor link to 'layers' section." onClick={() => copyAnchor('layers')}><LinkIcon /></IconButton>
        layers | <code>{`<div class="pushin-layer">`}</code>
      </h3>
      { createTable( layerRows ) }
    </PageLayout>
  );
}