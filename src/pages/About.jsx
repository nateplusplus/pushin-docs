import { useLayoutEffect, useRef } from "react";
import PageLayout from "../components/PageLayout";
import { Box } from '@mui/material';
import { PushIn } from "pushin";

import mountainMask from '../images/mountain/mountain-0-mask.svg';
import mountainLayer1 from '../images/mountain/mountain-02-hill-1.svg';
import mountainLayer2 from '../images/mountain/mountain-01-trees.svg';
import mountainLayer3 from '../images/mountain/mountain-03-hill-2.svg';
import mountainLayer4 from '../images/mountain/mountain-04-landscape.svg';
import mountainLayer5 from '../images/mountain/mountain-05-logo.svg';
import mountainLayer6 from '../images/mountain/mountain-06-sky.svg';


export default function About() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current, {
      target: '#demo',
      scrollTarget: 'window',
      mode: 'continuous',
      autoStart: 'screen-top',
      debug: true
    });

    pushIn.start();

    return () => pushIn.destroy();
  },[]);

  return (
    <PageLayout id="page-about">
      <h1>About PushIn.js</h1>
      <p className="lead">PushIn.js is a lightweight parallax effect, built with JavaScript, that simulates an interactive dolly-in or push-in animation on a webpage.</p>
      <h2>Working Demo</h2>
      <p>Scroll over the image below to try out this effect.</p>
      <div id="demo">
        <div ref={pushInContainer} className="pushin">
          <div className="pushin-scene">
            <div className="pushin-composition">
              <div className="pushin-layer" data-pushin-speed="20">
                <div className="mountain-0 no-pointer">
                  <Box className="mountain-0-text no-pointer"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      top: ['17%', null, '25%']
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>Scroll to begin</p>
                  </Box>
                  <img src={mountainMask} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed="7">
                <div className="mountain-1 no-pointer">
                  <img src={mountainLayer1} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed="8">
                <div className="mountain-2 no-pointer">
                  <img src={mountainLayer2} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed="4">
                <div className="mountain-3 no-pointer">
                  <img src={mountainLayer3} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed="1">
                <div className="mountain-4 no-pointer">
                  <img src={mountainLayer4} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed='0.9'>
                <div className="mountain-5 no-pointer">
                  <Box className="mountain-5-text no-pointer"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      
                    }}
                  >
                    <p style={{ textAlign: 'center', margin: 0 }}>PushIn.js</p>
                  </Box>
                  <img src={mountainLayer5} alt="" />
                </div>
              </div>
              <div className="pushin-layer" data-pushin-speed='0.5' data-pushin-to="4000">
                <div className="mountain-6 no-pointer">
                  <img src={mountainLayer6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Compatibility</h2>
      <p>PushIn.js supports all browsers that are ES5-compliant (IE8 and below are not supported).</p>
      <h2>How does it work?</h2>
      <p>This plugin uses a combination of JavaScript and CSS to create the illusion of objects moving forward or backward by manipulating their scale while the user scrolls on the page. The effect uses the modern browser's built in <a target="blank" rel="noopener noreferrer nofollow" href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">requestAnimationFrame</a> to deliver a performant experience that is cross-browser compatible.</p>
      <ul>
        <li>Zero dependencies!</li>
        <li>No canvas elements!</li>
        <li>No webGL!</li>
        <li>No flash!</li>
      </ul>
      <h2>How much does this cost?</h2>
      <p>It's completely free open source code under the MIT License!</p>
      <h2>How can I use it on my site?</h2>
      <p>Read the <a href="/installation/">Installation Guide</a> to learn more about how to use this on your own projects.</p>
      <p>You can also check out the <a rel="noopener nofollow noreferrer" target="_blank" href="https://github.com/nateplusplus/pushin">GitHub README</a> for more information about this plugin and how to contribute!</p>
      <h2>What do I do if I'm experiencing an issue?</h2>
      <p>Please submit a <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/nateplusplus/pushin/issues/new?assignees=&labels=&template=bug_report.md&title=">bug report</a> so I can put on my detective hat and look into it further!</p>
      <h2>How can I contribute to this documentation?</h2>
      <p>Please submit a <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/nateplusplus/pushin-docs/issues/new">ticket</a> if you find any issues, or go ahead and open a <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/nateplusplus/pushin-docs/pulls">pull request</a> if you'd like to contribute!</p>
    </PageLayout>
  );
}