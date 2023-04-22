import { useLayoutEffect, useRef } from "react";
import { Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { PushIn } from "pushin";
import 'pushin/dist/pushin.css';

import PageLayout from "../components/PageLayout";

import cactus from '../images/monster/pushin-monster-cactus.svg';
import monster from '../images/monster/pushin-monster.svg';

export default function Composition() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current, {
      target: '#demo'
    });

    pushIn.start();

    return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-composition">
      <h1>Frame your scene with Composition</h1>
      <p className="lead">Positioning elements within a scene while keeping your site responsive can be quite a challenge. The Composition feature is designed to make that process a bit easier.</p>
      <h2>Getting started with Composition</h2>
      <p>The easiest way to add Composition to your scene is by adding the <code>pushin-composition</code> class to a containing element that wraps all your pushin-layers.</p>
      <p>The following is an example of the pushin-composition class in action:</p>
      <SyntaxHighlighter language="xml" style={docco}>
        {
          `<div class="pushin">
  <div class="pushin-scene">
    <div class="pushin-composition">
      <div class="pushin-layer" data-pushin-transitions="false" data-pushin-from="0" data-pushin-to="0" data-pushin-speed="18">
        <img src="cactus.svg" style="width: 8%; bottom:46%; left:30%;">
      </div>
      <div class="pushin-layer" data-pushin-transitions="false" data-pushin-from="0" data-pushin-to="0">
        <img src="monster.svg" style="width: 10%; bottom:47%; right:40%">
      </div>
    </div>
  </div>
</div>`
        }
      </SyntaxHighlighter>
      <Box id="demo" sx={{ height: '350px', border: 'dashed grey 1px' }}>
        <div ref={pushInContainer} className="pushin">
          <Box className="pushin-scene" sx={{ background: 'linear-gradient(180deg, rgba(227,240,251,1) 0%, rgba(255,254,253,1) 35%, rgba(255,254,252,1) 47%, rgba(249,245,210,1) 50%, rgba(247,240,210,1) 70%, rgba(238,223,211,1) 100%)' }}>
            <div className="pushin-composition">
              <div className="pushin-layer" data-pushin-transitions="false" data-pushin-from="0" data-pushin-to="0" data-pushin-speed="18">
                <img src={cactus} alt="" style={{ position: 'absolute', width: '8%', bottom: '46%', left: '30%' }} />
              </div>
              <div className="pushin-layer" data-pushin-transitions="false" data-pushin-from="0" data-pushin-to="0">
                <img src={monster} alt="" style={{ position: 'absolute', width: '10%', bottom: '47%', right: '40%' }} />
              </div>
            </div>
          </Box>
        </div>
      </Box>
      <p>In the above example, you can see that the distance between the cactus and the monster will remain the same no matter how your resize your screen.</p>
      <h2>How does it work?</h2>
      <p>When positioning elements inside of a responsive container, you'll find that resizing the screen will change their position. The elements will drift around your scene, and it's nearly impossible to keep the same composition because the ratio of the width to the height of your frame is changing.</p>
      <p>The Composition feature locks the aspect ratio of this frame so that when resizing the window, your elements don't drift around. This will allow you to more easily compose a scene while still building for responsive design.</p>
      <p>By default, Composition comes with a 1:2 aspect ratio. This is the recommended aspect ratio to ensure that when you're viewing your scene on a mobile phone, you do not see it cropped on the top and bottom.</p>
      <h2>When should I use Composition?</h2>
      <p>You don't always need to use Composition, if you are not necessarily worried about elements drifting a little between devices, if you are using relative positioning, or if all your items are center screen.</p>
      <p>If you are trying to compose a scene of multiple elements that should be positioned in a specific way, you should most definitely use Composition.</p>
      <h2>Customization</h2>
      <p>You can change the aspect ratio of your composition by using an HTML attribute or the JavaScript API.</p>
      <h3>Using HTML attributes</h3>
      <SyntaxHighlighter language="xml" style={docco}>
        {
          `<div class="pushin-composition" data-pushin-ratio="16,9">
  <!-- Use a 16:9 composition -->
</div>`
        }
      </SyntaxHighlighter>
      <h3>Using JavaScript API</h3>
      <SyntaxHighlighter language="javascript" style={docco}>
        {
          `// Option 1: Global function
pushInStart({
  composition: {
    ratio: [16, 9],
  }
});

// Option 2: Class constructor
const pushIn = new PushIn(
  document.querySelector('.pushin'),
  {
    composition:{
      ratio: [16, 9],
    }
  }
);
pushIn.start();`
        }
      </SyntaxHighlighter>
      <h2>Tips and Tricks</h2>
      <p>There are a few tricks which have proven helpful when building complex scenes:</p>
      <ol>
        <li>When working with graphics, build the entire composition in the aspect ratio you want it to be, and export the layers separately.</li>
        <li>SVG Graphics work best, since you will be scaling them quite a lot.</li>
        <li>For precise positioning, try using <code>position: absolute;</code> and use percentages to position your elements (rather than pixels). This will help your scene scale with the device size.</li>
      </ol>
    </PageLayout>
  );
}