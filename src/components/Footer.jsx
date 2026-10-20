import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Brand footer />
      <span>Digital solutions that move you forward.</span>
      <span>© {new Date().getFullYear()} Cloud Sprint</span>
    </footer>
  );
}
