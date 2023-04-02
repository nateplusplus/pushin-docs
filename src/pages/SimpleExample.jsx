import PageLayout from "../components/PageLayout";
import { useLayoutEffect, useRef } from "react";
import { PushIn } from "pushin";

export default function SimpleExample() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
      const pushIn = new PushIn(pushInContainer.current);
      pushIn.start();

      return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-simple-example" padded={false}>
      <div ref={pushInContainer} className="pushin">
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