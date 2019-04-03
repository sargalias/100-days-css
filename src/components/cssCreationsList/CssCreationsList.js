import React from 'react';
import LazyLoad from 'react-lazyload';
import loadable from '@loadable/component';
import './cssCreationsList.scss';

import End from 'cssCreations/100-end/100-end';
import Person from 'cssCreations/097-person/097-person';
import PigDrawing from 'cssCreations/095-pig-drawing/095-pig-drawing';
import FlexStripes from 'cssCreations/080-flex-stripes/080-flex-stripes';
const BlockDance = loadable(() =>
  import('cssCreations/079-block-dance/079-block-dance')
);
const PasswordInput = loadable(() =>
  import('cssCreations/076-password-input/076-password-input')
);
const RadioSelection = loadable(() =>
  import('cssCreations/074-radio-selection/074-radio-selection')
);
const AnimatedRings = loadable(() =>
  import('cssCreations/072-animated-rings/072-animated-rings')
);
const AnimatedTypography = loadable(() =>
  import('cssCreations/023-animated-typography')
);
const Pacman = loadable(() => import('cssCreations/021-pacman'));
const Weather = loadable(() => import('cssCreations/009-weather'));
const Title = loadable(() => import('cssCreations/001-title'));

const RotatingCube = loadable(() =>
  import('cssCreations/rotatingCube/RotatingCube')
);
const FanBall = loadable(() => import('cssCreations/fanBall/FanBall'));
const RollingBall = loadable(() =>
  import('cssCreations/rollingBall/RollingBall')
);

const cssCreationComponents = [
  End,
  Person,
  PigDrawing,
  FlexStripes,
  BlockDance,
  PasswordInput,
  RadioSelection,
  AnimatedRings,
  AnimatedTypography,
  Pacman,
  Weather,
  Title,
  RotatingCube,
  FanBall,
  RollingBall
];

const displayCssCreations = () => {
  return cssCreationComponents.map((Component, i) =>
    i < 4 ? (
      <Component key={i} />
    ) : (
      <LazyLoad height={400} offset={200} key={i}>
        <Component />
      </LazyLoad>
    )
  );
};

export default () => (
  <main>
    <section className="css-creations-list">
      <header className="css-creations-list__header">
        <h2 className="css-creations-list__heading">CSS Creations</h2>
      </header>
      <div className="css-creations-list__list">{displayCssCreations()}</div>
    </section>
  </main>
);
