// import { css } from 'solid-styled';
import { css } from 'solid-styled-components';

import type { JSX, ParentComponent } from 'solid-js';
import { tokens } from 'tokens';
import type { Padding } from 'types/common';
import type { ActionToken, BgToken, ColorToken, ContentToken, InvertedToken, MutedToken } from 'types/tokens';

export interface CardProps {
  ratio?: number;
  padding?: Padding;
  color?: ContentToken | ActionToken | MutedToken | InvertedToken;
  backgroundColor?: BgToken;
  backgroundImage?: JSX.Element;
  backgroundGradient?: ColorToken[];
  children: JSX.Element;
}

function getPadding({ padding = 'default' }: Pick<CardProps, 'padding'>) {
  switch (padding) {
    case 'none':
      return tokens.size.x0;
    case 'default':
    default:
      return tokens.size.x32;
  }
}

export const Card: ParentComponent<CardProps> = ({
  ratio = 2 / 1,
  padding,
  color = tokens.content.default,
  backgroundColor = tokens.bg.low,
  backgroundImage,
  backgroundGradient,
  children,
}) => {
  const root = css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${tokens.radius.container};
    overflow: hidden;
    padding: ${getPadding({ padding })};
    color: ${color};
    aspect-ratio: ${ratio.toString()};
    background-color: ${backgroundColor};
    background-image: ${backgroundGradient ? `linear-gradient(150deg, ${backgroundGradient.join(', ')})` : ''};
    background-size: cover;
  `;

  const imageWrapper = css`
    position: absolute;
    inset: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const contentWrapper = css`
    z-index: 1;
  `;

  return (
    <div class={root}>
      {backgroundImage && <div class={imageWrapper}>{backgroundImage}</div>}
      <div class={contentWrapper}>{children}</div>
    </div>
  );
};
