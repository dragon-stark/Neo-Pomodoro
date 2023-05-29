import { memo, SVGProps } from 'react';

const YearlyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 243 241' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_di_5_26)'>
      <circle cx={120.354} cy={120.354} r={90} stroke='#3C4163' strokeWidth={4} />
    </g>
    <g opacity={0.5} filter='url(#filter1_f_5_26)'>
      <path
        d='M70.0368 193.586C81.5741 201.828 94.8957 207.228 108.916 209.345C122.936 211.462 137.258 210.237 150.715 205.768C164.171 201.3 176.382 193.716 186.351 183.634C196.321 173.551 203.767 161.256 208.083 147.749C212.399 134.243 213.463 119.908 211.188 105.913C208.913 91.9176 203.363 78.6578 194.991 67.2142C186.619 55.7705 175.662 46.4668 163.012 40.0613C150.363 33.6557 136.378 30.3296 122.199 30.3539'
        stroke='url(#paint0_radial_5_26)'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <g filter='url(#filter2_i_5_26)'>
      <path
        d='M68.0368 193.586C79.5741 201.828 92.8957 207.228 106.916 209.345C120.936 211.462 135.258 210.237 148.715 205.768C162.171 201.3 174.382 193.716 184.351 183.634C194.321 173.551 201.767 161.256 206.083 147.749C210.399 134.243 211.463 119.908 209.188 105.913C206.913 91.9176 201.363 78.6578 192.991 67.2142C184.619 55.7705 173.662 46.4668 161.012 40.0613C148.363 33.6557 134.378 30.3296 120.199 30.3539'
        stroke='url(#paint1_radial_5_26)'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <filter
        id='filter0_di_5_26'
        x={28.3538}
        y={28.3538}
        width={186}
        height={186}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.35155 0 0 0 0 0.378565 0 0 0 0 0.554167 0 0 0 0.81 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_5_26' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_5_26' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.203194 0 0 0 0 0.222271 0 0 0 0 0.320833 0 0 0 1 0' />
        <feBlend mode='normal' in2='shape' result='effect2_innerShadow_5_26' />
      </filter>
      <filter
        id='filter1_f_5_26'
        x={60.0366}
        y={20.3538}
        width={162.317}
        height={200}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={4} result='effect1_foregroundBlur_5_26' />
      </filter>
      <filter
        id='filter2_i_5_26'
        x={65.0366}
        y={28.3538}
        width={147.317}
        height={185}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-1} dy={2} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.561053 0 0 0 0 0.41276 0 0 0 0 1 0 0 0 1 0' />
        <feBlend mode='normal' in2='shape' result='effect1_innerShadow_5_26' />
      </filter>
      <radialGradient
        id='paint0_radial_5_26'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(213.354 120.354) rotate(-180) scale(92.5 259.238)'
      >
        <stop stopColor='#612FF5' />
        <stop offset={1} stopColor='#855CFF' />
      </radialGradient>
      <radialGradient
        id='paint1_radial_5_26'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(211.354 120.354) rotate(-180) scale(92.5 259.238)'
      >
        <stop stopColor='#612FF5' />
        <stop offset={1} stopColor='#855CFF' />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(YearlyIcon);
export { Memo as YearlyIcon };
