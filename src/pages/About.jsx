import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout id="page-about">
      <h1>About PushIn.js</h1>
      <p>PushIn.js is a lightweight parallax effect, built with JavaScript, that simulates an interactive dolly-in or push-in animation on a webpage.</p>
      <h2>Working Demo</h2>
      <p>Scroll over the image below to try out this effect.</p>
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
    </PageLayout>
  );
}