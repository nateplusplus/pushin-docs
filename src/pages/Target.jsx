import { useLayoutEffect } from "react";
import { Box } from '@mui/material';

import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { PushIn } from "pushin";
import 'pushin/dist/pushin.css';

export default function Target() {

  useLayoutEffect(() => {
    const container = document.querySelector('.pushin');
    const pushIn = new PushIn(container, {
      target: '#demo'
    });

    pushIn.start();

    return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-target">
      <h1>Constrain PushIn inside elements using the Target option</h1>
      <p>The original concept of PushIn.js was focused on full-page animations. This approach leans heavily on the window scroll event, and each layer is fixed, meaning it is positioned relative to the viewport instead of being relatively positioned within the page content. This works great for full-page animations but it doesn't work well within the constraints of any sort of page layout.</p>
      <p>By providing a "target" element, you can now position the effect within a container on the page. Doing so will attach any scroll events to that target element, and constrain the effect to live within that container.</p>
      <h2>Usage</h2>
      <p>You can use this option with the global helper function or the class constructor.</p>
      <h3>Option 1: Global helper function.</h3>
      <SyntaxHighlighter language="javascript" style={docco}>
        {`pushInStart({ target: '.container' });`}
      </SyntaxHighlighter>
      <h3>Option 2: Class constructor.</h3>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
        `const element = document.querySelector('.pushin');
const pushIn = new PushIn(element, { target: '.container' });
pushIn.start();`
        }
      </SyntaxHighlighter>
      <h2>Working demo</h2>
      <p>Below is an example of PushIn.js being applied to a scrollable div element.</p>
      <Box
        id="demo"
        sx={{
          margin: '60px auto',
          maxWidth: '750px',
          height: '350px',
          maxHeight: '100vh',
          backgroundColor: '#fafafa',
          outline: '3px dotted #dedede',
        }}
      >
        <div className="pushin">
          <Box className="pushin-layer" sx={{ padding: '0 3rem' }}>
            This example demonstrates using PushIn.js within a scrollable div.
          </Box>
          <Box className="pushin-layer" sx={{ padding: '0 3rem' }}>
            Optionally attach PushIn to any element.
          </Box>
          <Box className="pushin-layer" sx={{ padding: '0 3rem' }}>
            All event listeners will be added to the target element.
          </Box>
        </div>
      </Box>
    </PageLayout>
  );
}