function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <path
          d="M11 29h17a8 8 0 0 0 1.1-15.9A10.5 10.5 0 0 0 9 17a6.1 6.1 0 0 0 2 12Z"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="m16 24 6-6m0 0v5m0-5h-5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " footer-brand" : ""}`}
      href="#home"
      aria-label="Cloud Sprint — Home"
    >
      <BrandMark />
      <span className="brand-name" dir="ltr">
        CLOUD <b>SPRINT</b>
        <small>SOFTWARE SERVICES</small>
      </span>
    </a>
  );
}
