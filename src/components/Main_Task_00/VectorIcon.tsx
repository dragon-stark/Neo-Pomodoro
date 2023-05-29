import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.12 11.1536L6.02495 0.595536C4.78815 -0.167358 3.29284 -0.199077 2.0249 0.510688C0.756956 1.22034 0 2.51294 0 3.96809V24.9881C0 27.1884 1.76943 28.988 3.9442 28.9999C3.95013 28.9999 3.95607 29 3.96189 29C4.64151 28.9999 5.34974 28.7865 6.01121 28.3821C6.54334 28.0568 6.71152 27.3609 6.38686 26.8278C6.0622 26.2946 5.36754 26.1262 4.83558 26.4515C4.52619 26.6405 4.22403 26.7383 3.95635 26.7383C3.1358 26.7338 2.25724 26.0295 2.25724 24.9882V3.96815C2.25724 3.34391 2.58196 2.78957 3.12579 2.48513C3.66968 2.18068 4.31103 2.19428 4.8409 2.52115L21.936 13.0793C22.4499 13.3962 22.7439 13.9247 22.7426 14.5293C22.7414 15.1338 22.4452 15.6612 21.9286 15.9771L9.56873 23.5594C9.03711 23.8856 8.87 24.5817 9.19551 25.1143C9.52096 25.647 10.2158 25.8144 10.7474 25.4883L23.1058 17.9068C24.2891 17.1836 24.9972 15.9227 25 14.5338C25.0028 13.1451 24.2998 11.8814 23.12 11.1536Z'
      fill='url(#paint0_linear_5_30)'
      stroke='url(#paint1_linear_5_30)'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_5_30'
        x1={13.8889}
        y1={29}
        x2={-3.39149}
        y2={2.18562}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D2D6EF' />
        <stop offset={1} stopColor='#9299C2' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_5_30'
        x1={13.8889}
        y1={29}
        x2={-3.39149}
        y2={2.18562}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D2D6EF' />
        <stop offset={1} stopColor='#9299C2' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
