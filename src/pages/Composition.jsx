import PageLayout from "../components/PageLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Composition() {
  return (
    <PageLayout id="page-composition">
      <h1>Frame your scene with Composition</h1>
      <p>Positioning elements within a scene while keeping your site responsive can be quite a challenge. The Composition feature is designed to make that process a bit easier.</p>
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
    </PageLayout>
  );
}