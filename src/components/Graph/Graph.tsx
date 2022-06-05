import React from 'react'
import { css } from 'twin.macro'

function Graph() {
  return (
    <section
      css={css`
        width: 100%;
        height: 200vh;
        padding: 15rem 0rem;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 75rem;
          margin: 0 auto;

          span {
            position: absolute;

            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.7);
          }

          img {
            position: absolute;
          }
        `}
      >
        <span
          css={css`
            left: 0;
            bottom: 3rem;
          `}
        >
          IDEAS
        </span>

        <span
          css={css`
            left: -7rem;
            bottom: 0rem;
          `}
        >
          CLIENTS
        </span>

        <span
          css={css`
            left: 0;
            bottom: -3rem;
          `}
        >
          WORLD
        </span>

        <span
          css={css`
            right: 0;
            top: 3rem;
          `}
        >
          REALITY
        </span>

        <span
          css={css`
            right: -7rem;
            top: 0rem;
          `}
        >
          SERVICE
        </span>

        <span
          css={css`
            right: 0;
            top: -3rem;
          `}
        >
          WORLD
        </span>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 757 734"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          css={css`
            margin: 0 auto;
          `}
        >
          <img src="images/logg_N.png" css={css``} />
          {/* <text
            color="#fff"
            fontSize={12}
            css={css`
              color: #fff;
            `}
          >
            IDEAS
          </text> */}

          <g clipPath="url(#clip0_19_470)">
            <path
              d="M24.5674 725.43C20.2171 725.43 17.8334 725.162 17.7291 725.162L17.9972 722.942C18.5037 722.942 68.8603 728.41 137.84 686.844C201.56 648.436 294.615 560.953 376.094 362.253C412.193 274.234 453.729 200.77 499.542 143.888C536.221 98.3589 575.717 63.2882 616.926 39.6743C687.231 -0.685289 738.943 6.51061 739.435 6.58511L739.107 8.80496C738.601 8.80496 687.514 1.72824 617.849 41.7154C553.489 78.6633 459.644 164.418 378.165 363.103C342.066 451.122 300.693 524.928 255.179 582.466C218.752 628.532 179.585 664.332 138.793 688.87C83.9821 721.885 40.7172 725.43 24.5674 725.43Z"
              fill="white"
            />
            <path
              d="M-0.0148926 724.164C-0.0148926 717.892 4.02253 714.54 9.63921 714.54C15.2559 714.54 19.2488 717.892 19.2488 724.164C19.2488 730.436 15.241 733.788 9.63921 733.788C4.03743 733.788 -0.0148926 730.436 -0.0148926 724.164ZM9.63921 717.653C5.78054 717.653 2.83074 719.784 2.83074 724.164C2.83074 728.544 5.81033 730.675 9.63921 730.675C13.4681 730.675 16.4031 728.544 16.4031 724.164C16.4031 719.784 13.4681 717.653 9.65412 717.653H9.63921Z"
              fill="white"
            />
            <path
              d="M737.736 9.62433C737.736 3.35213 741.774 0 747.376 0C752.977 0 757 3.35213 757 9.62433C757 15.8965 752.992 19.2338 747.376 19.2338C741.759 19.2338 737.736 15.8965 737.736 9.62433ZM747.376 3.11376C743.532 3.11376 740.582 5.22932 740.582 9.62433C740.582 14.0193 743.562 16.1349 747.376 16.1349C751.19 16.1349 754.154 14.0044 754.154 9.62433C754.154 5.24422 751.204 3.11376 747.376 3.11376V3.11376Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_470">
              <rect width="757" height="733.788" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Graph
