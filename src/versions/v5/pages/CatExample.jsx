import { useLayoutEffect, useRef } from "react";

import { PushIn } from "pushin";
import 'pushin/dist/pushin.css';

import PageLayout from "../components/PageLayout";
import './cat.css';

import plant from '../images/cat/plant.svg';
import light from '../images/cat/light.svg';
import chair from '../images/cat/chair.svg';
import tv from '../images/cat/tv.svg';
import sofa from '../images/cat/livingroom-3.svg';
import wall from '../images/cat/livingroom-4.svg';

export default function CatExample() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
      const pushIn = new PushIn(pushInContainer.current);
      pushIn.start();

      return () => pushIn.destroy();
  });

  return (
    <PageLayout id="page-cat-example">
      <div ref={pushInContainer} className="pushin">
        <div className="pushin-scene">
          <div className="pushin-composition">
            <div className="pushin-layer layer-1" data-pushin-transition-start="-1" data-pushin-to="1000" data-pushin-speed="80">
              <div className="table"></div>
              <div className="plant">
                <img src={plant} alt="" />
              </div>
            </div>
            <div className="pushin-layer layer-2" data-pushin-transitions="false" data-pushin-from="0" data-pushin-speed="16">
              <div className="light">
                <img src={light} alt="" />
              </div>
              <div className="chair">
                <img src={chair} alt="" />
              </div>
              <div className="tv">
                <img src={tv} alt="" />
              </div>
            </div>
            <div className="pushin-layer layer-3" data-pushin-transitions="false" data-pushin-from="0" data-pushin-speed="10">
              <div className="sofa">
                <img src={sofa} alt="" />
              </div>
            </div>
            <div className="pushin-layer layer-4" data-pushin-transitions="false" data-pushin-from="0">
              <div className="floor"></div>
            </div>
            <div className="pushin-layer layer-5" data-pushin-transitions="false" data-pushin-from="0">
              <div className="ceiling"></div>
              <div className="wall">
                <img src={wall} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}