import React, {useLayoutEffect} from 'react';
import { Box, Card, CardContent } from '@mui/material';

import { PushIn } from "pushin";
import 'pushin/dist/pushin.css';

import PageLayout from "../components/PageLayout";

export default function ResponsiveExample() {
  useLayoutEffect(() => {
    const container = document.querySelector('.pushin');
    const pushIn = new PushIn(container, { debug: true });

    pushIn.start();

    return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-responsive-example">
      <Box sx={{ backgroundColor: 'white', pb: '1px' }}>
        <h1>Responsive</h1>
        <p className="lead">This example illustrates some of the responsive design features built into pushIn.js.</p>
        <p>These features can help you control the layout and behavior of the effect for each of your breakpoints, giving you a great amount of flexibility.</p>
        <h2>Why is this important?</h2>
        <p>When there is a lot of wrapping content like paragraphs of text, the page content could become longer on smaller screens like phones or tablets. This could interfere with the timing of pushIn.js animations, since it relies directly on the window scroll position. This is where specifying different settings per breakpoint can come in handy.</p>
      </Box>
      <Box
        className="pushin"
        sx={{
          backgroundColor: '#AAAAAA',
          zIndex: '-1'
        }}
      >
        <div className="pushin-scene" data-pushin-breakpoints='768, 1440'>
          <div className="pushin-layer" data-pushin-from='580,280,200'>
            <Card>
              <CardContent>
                <p>Watch the debugger floating near the top of your browser.</p>
                <p>This should begin animating at:</p>
                <ul>
                  <li>Mobile: 580px</li>
                  <li>Tablet: 280px</li>
                  <li>Desktop: 200px</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Box>
    </PageLayout>
  );
}