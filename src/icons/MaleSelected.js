import React from "react";

const MaleSelected = ({ showStroke, fill }) => {
  return (
    <svg
      width="140px"
      height="140px"
      viewBox="0 0 142 142"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M89.5207,89.5207 C75.5476051,103.4931 24.4523949,103.4931 10.4793,89.5207 C-3.49309999,75.5476051 -3.49309999,24.4523949 10.4793,10.4793 C24.4523949,-3.49309999 75.5476051,-3.49309999 89.5207,10.4793 C103.4931,24.4523949 103.4931,75.5476051 89.5207,89.5207"
          id="male-selected-path-1"
        ></path>
        <filter
          x="-35.5%"
          y="-27.5%"
          width="171.0%"
          height="171.0%"
          filterUnits="objectBoundingBox"
          id="male-selected-filter-2"
        >
          <feMorphology
            radius="1.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dx="0"
            dy="8"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="10"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.137254902   0 0 0 0 0.0431372549   0 0 0 0 0.28627451  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <linearGradient
          x1="3.21632432%"
          y1="100%"
          x2="96.7836757%"
          y2="0%"
          id="male-selected-linearGradient-3"
        >
          <stop stopColor="#600BFB" offset="0%"></stop>
          <stop stopColor="#6B54FB" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="male-selected-Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="male-selected-hoory-m-selected"
          transform="translate(21.000000, 13.000000)"
        >
          <g id="male-selected-Fill-2-Copy">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#male-selected-filter-2)"
              xlinkHref="#male-selected-path-1"
            ></use>
            <use
              stroke={showStroke && fill}
              strokeWidth="3"
              fill="#FFFFFF"
              fillRule="evenodd"
              xlinkHref="#male-selected-path-1"
            ></use>
          </g>
          <path
            d="M78.6626962,58.1273587 L78.8285211,58.1338947 C79.2156113,58.1644897 79.6017777,58.303149 79.9433101,58.5636168 L79.9433101,58.5636168 L80.0717947,58.6697196 C80.7310053,59.2583979 80.9706128,60.2021746 80.6486709,61.0379393 L80.6486709,61.0379393 L80.4932548,61.4335759 C75.7031855,73.3961448 64.0349205,81.8455522 50.3915127,81.8455522 L50.3915127,81.8455522 L49.9427154,81.8425011 C36.3512698,81.6575948 24.7861164,73.086541 20.142462,61.0588426 L20.142462,61.0588426 L20.0802978,60.872643 C20.027146,60.6850764 20.0008687,60.4939716 20,60.3043909 L20,60.3043909 L20,60.2831006 L20.0082422,60.1055093 C20.0602247,59.5160956 20.3557163,58.9573646 20.8474367,58.5825845 L20.8474367,58.5825845 L20.9761088,58.4915355 C22.1074869,57.7503503 23.6421404,58.2489788 24.1414367,59.5391006 L24.1414367,59.5391006 L24.2898202,59.9142964 C28.4667827,70.2582347 38.5767016,77.5572942 50.3915127,77.5572942 L50.3915127,77.5572942 L50.8180379,77.5541194 C62.5976013,77.3786567 72.6197343,69.9471651 76.6489241,59.5212942 C76.989443,58.6398748 77.8137152,58.1273587 78.6626962,58.1273587 L78.6626962,58.1273587 Z M50.588562,19 C55.7601157,19.0166866 60.5339174,20.716 64.3918017,23.5783284 L64.3918017,23.5783284 L64.713328,23.8212164 C70.248809,28.0781525 73.8166612,34.7624359 73.8166612,42.2808657 L73.8166612,42.2808657 L73.8164626,43.4530993 C73.8090862,43.6817219 73.5776474,49.8794986 70.0916198,52.5757015 L70.0916198,52.5757015 L70.0338584,52.9071151 C68.3592308,62.1773003 61.8711073,70.6281475 50.6650826,70.6530746 L50.6650826,70.6530746 L50.6650826,70.6542388 L50.6534298,70.6538507 L50.6534298,70.6538507 L50.6289587,70.6538507 L50.6289587,70.6538507 L50.6161405,70.6542388 L50.6161405,70.6526866 L50.2207008,70.6482872 C39.0726269,70.4242752 32.6892899,61.7846921 31.1670744,52.4453134 L31.1670744,52.4453134 L31.182563,52.5553769 L31.182563,52.5553769 L31.2000909,52.6668955 L31.0000377,52.5131906 C27.5284681,49.7305146 27.3604628,43.446597 27.3604628,43.446597 L27.3604628,42.2808657 L27.3644098,41.8480469 C27.5010431,34.3622889 31.174755,27.7413157 36.7853223,23.5783284 L36.7853223,23.5783284 L37.1615078,23.3049769 C40.9516077,20.6081178 45.5838326,19.0161483 50.588562,19 Z M37.5944215,35.5262985 L37.4559953,36.0747847 C36.5525432,39.573866 35.1360496,43.5333866 32.9367603,46.7602388 L32.9367603,46.7602388 L32.9767686,47.4366269 L32.9767686,48.048209 C32.9767686,57.7850149 38.9578099,68.4694627 50.6402231,68.4849851 L50.6402231,68.4849851 L51.0151098,68.4808105 C62.4509661,68.2401872 68.3044545,57.680702 68.3044545,48.048209 L68.3044545,48.048209 L68.3044545,47.4366269 L68.1560744,41.9692537 L68.1465579,41.9347649 L68.1465579,41.9347649 L68.1370413,41.9005672 L67.4967931,41.9210063 C52.4082694,42.3344493 41.8729213,37.7917048 37.5944215,35.5262985 L37.5944215,35.5262985 Z M56.409,62.0175522 L56.5013708,62.0241805 C56.9451401,62.089366 57.1115391,62.6187606 56.725875,62.8718856 L56.725875,62.8718856 L56.4450393,63.0512952 C51.5868343,66.0655032 47.2402642,64.1464768 45.2325,62.8772189 L45.2325,62.8772189 L45.1603779,62.8233994 C44.8360312,62.5375718 45.0497812,62.0175522 45.53775,62.0175522 L45.53775,62.0175522 L56.409,62.0175522 Z M41.6534615,47.1059369 L41.8139062,47.1113415 C43.0333066,47.1937667 43.9969231,48.2087093 43.9969231,49.4490138 L43.9969231,49.4490138 L43.9915165,49.6095026 C43.9090618,50.8292121 42.893766,51.7924753 41.6534615,51.7924753 L41.6534615,51.7924753 L41.4930169,51.7870707 C40.2736165,51.7046448 39.31,50.6896869 39.31,49.4490138 C39.31,48.154783 40.3592308,47.1059369 41.6534615,47.1059369 L41.6534615,47.1059369 Z M59.5214286,47.1059369 L59.6704129,47.1113415 C60.8027133,47.1937667 61.6975,48.2087093 61.6975,49.4490138 L61.6975,49.4490138 L61.6924796,49.6095026 C61.6159146,50.8292121 60.6731399,51.7924753 59.5214286,51.7924753 L59.5214286,51.7924753 L59.3724461,51.7870707 C58.240173,51.7046448 57.3457143,50.6896869 57.3457143,49.4490138 C57.3457143,48.154783 58.3196429,47.1059369 59.5214286,47.1059369 L59.5214286,47.1059369 Z M39.1631258,30.7414146 C38.8041104,30.5679708 38.3646129,30.6651716 38.1118099,30.9863881 L38.1118099,30.9863881 L38.0485795,31.0780641 C37.8037574,31.4865218 37.9361287,32.0292985 38.3639008,32.2689254 C41.2231322,33.8743284 50.9486364,38.7545672 63.9319008,39.0234925 L63.9319008,39.0234925 L63.3703551,38.9762968 C50.8784911,37.8568299 41.7082353,32.3944627 39.258843,30.7954627 L39.258843,30.7954627 Z"
            id="male-selected-Combined-Shape"
            fill={fill}
          ></path>
          <path
            d="M72.51784,35.233687 L68.14304,35.233687 C67.17024,35.233687 66.38224,36.0053392 66.38224,36.9562088 C66.38224,37.9078609 67.17024,38.6795131 68.14304,38.6795131 L73.43544,38.6795131 C73.21984,37.4966001 72.90704,36.3481218 72.51784,35.233687"
            id="male-selected-Fill-16"
            fill="#000000"
            opacity="0.0979120164"
          ></path>
          <path
            d="M69.50788,42.1242827 C69.50788,43.0759348 70.29628,43.8468044 71.26868,43.8468044 L73.81108,43.8468044 L73.81108,42.8247175 C73.81108,42.0053262 73.75948,41.1988479 73.67548,40.4017609 L71.26868,40.4017609 C70.29628,40.4017609 69.50788,41.1726305 69.50788,42.1242827"
            id="male-selected-Fill-18"
            fill="#000000"
            opacity="0.0979120164"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MaleSelected;