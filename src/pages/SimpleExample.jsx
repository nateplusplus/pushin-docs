import PageLayout from "../components/PageLayout";
import { useLayoutEffect } from "react";

import { PushIn } from "pushin";
import 'pushin/dist/pushin.css';

export default function SimpleExample() {

  useLayoutEffect(() => {
      const container = document.querySelector('.pushin');
      const pushIn = new PushIn(container);
      pushIn.start();

      return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-simple-example">
      <div className="pushin">
        <div className="pushin-layer">
          This example demonstrates the simplest, zero-configuration setup for pushin.js.
        </div>
        <div className="pushin-layer">
          These layers are added to the HTML without any parameters and minimal CSS.
        </div>
        <div className="pushin-layer">
          Pushin.js has configured the timing of this effect automatically to adjust for the number of layers.
        </div>
        <div className="pushin-layer">
          The scroll length increases to accommodate all layers in an evenly-spaced animation.
        </div>
      </div>
    </PageLayout>
  );
}