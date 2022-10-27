import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Made with by{' '}
        <a
          className="linkName"
          href="https://github.com/SE73NSKYLINE"
          target="_blank"
          rel="noreferrer">
          Kacper Borowski
        </a>
      </p>
    </footer>
  );
};

export default Footer;
