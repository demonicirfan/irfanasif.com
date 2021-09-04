import './Heading_Layout.css';

function Heading_Layout({ children }) {
  return (
    <div className='container'>
      <h1 class='headline'>
        <span class='visually-hidden'>{children}</span>
        <svg
          aria-hidden='true'
          id='lockup-headline-mask'
          class='headline lockup-headline-mask visually-hidden'
        >
          <clipPath id='lockup-headline-mask-path'>
            <text
              dominant-baseline='hanging'
              text-anchor='middle'
              x='50%'
              y='0em'
              dy='0.125em'
            >
              {children}
            </text>
          </clipPath>
        </svg>
      </h1>
    </div>
  );
}

export { Heading_Layout };
