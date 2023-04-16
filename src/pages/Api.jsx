import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

export default function Api() {

  function createTable(rows) {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>HTML Attribute</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Default</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Description</TableCell>
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
                <TableCell>{row.options}</TableCell>
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
    createData('debug', 'none', <code>boolean</code>, <code>false</code>, <code>true, false</code>, 'Enables a tool to display the current scroll position which can help with animation timing.'),
    createData('selector', 'none', <code>string</code>, '.pushin', '', <><p>If you are using the global <code>pushInStart()</code> function to create multiple instances of PushIn on one page, and you need to supply specific configurations to each instance, use this option to target a specific element (or multiple elements) as the PushIn container(s).</p><p><strong>Note:</strong> If using the <code>new PushIn()</code> class constructor, you will pass an element in as the first parameter, so this option is unnecessary and will be ignored.</p></>),
    createData('target', <code>data-pushin-target</code>, <code>string</code>, <code>undefined</code>, '', 'JavaScript selector used to attach PushIn to an element on the page.'),
    createData('scrollTarget', <code>data-pushin-scroll-target</code>, <code>string</code>, <code>window</code>, '', 'JavaScript selector used to bind scroll events. If "window" is provided, scroll events will be bound to the Window object, regardless of which element is the target.'),
    createData('mode', <code>data-pushin-mode</code>, <code>string</code>, <code>sequential</code>, <code>sequential, continuous</code>, 'Specify how PushIn layers should be displayed. Use "continuous" mode to display all layers continuously throughout the animation. Use "sequential" to display layers in a sequence, one after another.'),
  ];

  const sceneRows = [
    createData('breakpoints', <code>data-pushin-breakpoints</code>, <code>string</code>, <code>0,768,1440,1920</code>, '', 'Provide a comma-separated list of numbers to configure appropriate responsive design breakpoints.'),
    createData('inpoints', <code>data-pushin-from</code>, <code>string</code>, <code>0</code>, '', 'Comma-separated list of numbers representing the screen position at which the scene should begin animating.'),
    createData('layerDepth', 'none', <code>number</code>, <code>1000</code>, '', 'When an inpoint or outpoint is not provided for a layer, pushIn will use this number to calculate how long the layer should animate when scrolling.'),
    createData('ratio', <code>data-pushin-ratio</code>, <code>string</code>, <code>1,2</code>, '', 'Set an aspect ratio for your scene to prevent element positions from drifting when screens resize.'),
  ];

  const compositionRows = [
    createData('ratio', <code>data-pushin-ratio</code>, <code>string</code>, <code>1,2</code>, '', 'Set an aspect ratio for your scene to prevent element positions from drifting when screens resize.'),
  ];

  const layerRows = [
    createData('inpoints', <code>data-pushin-from</code>, <code>string</code>, <code>undefined</code>, '', 'Comma-separated list of numbers representing the screen position at which the layer should begin animating.'),
    createData('outpoints', <code>data-pushin-to</code>, <code>string</code>, <code>undefined</code>, '', 'Comma-separated list of numbers representing the screen position at which the layer should stop animating.'),
    createData('speed', <code>data-pushin-speed</code>, <code>number</code>, <code>8</code>, '', 'A number representing how fast or slow the layer should grow or shrink during scroll events.'),
    createData('transitions', <code>data-pushin-transitions</code>, <code>boolean</code>, <code>true</code>, '', <><p>Whether to fade in or out when the layer is not active. Setting this to <code>false</code> will turn off both start and end transitions.</p><p><strong>Note:</strong> By default, the first layer does not fade in, and the last layer does not fade out.</p></>),
    createData('transitionStart', <code>data-pushin-transition-start</code>, <code>number</code>, <code>200</code>, '', <><p>Duration of the fade-in effect after the layer becomes active (in pixels).</p><p><strong>Note:</strong> Use <code>-1</code> to turn off the start transition only (does not affect end transition).</p></>),
    createData('transitionEnd', <code>data-pushin-transition-end</code>, <code>number</code>, <code>200</code>, '', <><p>Duration of the fade-out effect before the layer becomes inactive (in pixels).</p><p><strong>Note:</strong> Use <code>-1</code> to turn off the end transition only (does not affect start transition).</p></>),
  ];

  return (
    <PageLayout id="page-api">
      <h1>PushIn API Reference</h1>
      <p className="lead">For more information, questions, bug reporting or feature requests, checkout the <a href="https://github.com/nateplusplus/pushin" target="_blank" rel="noopener noreferrer nofollow">project on GitHub</a>.</p>
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
      { createTable( pushinRows ) }
      <h3>scene | <code>.pushin-scene</code></h3>
      { createTable( sceneRows ) }
      <h3>composition | <code>.pushin-composition</code></h3>
      { createTable( compositionRows ) }
      <h3>layers | <code>.pushin-layer</code></h3>
      { createTable( layerRows ) }
    </PageLayout>
  );
}