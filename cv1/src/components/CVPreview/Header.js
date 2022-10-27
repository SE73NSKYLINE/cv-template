import Icon from '../UI/Icon';
import classes from './Header.module.css';

const Header = ({ info }) => {
  return (
    <header className={classes.header}>
      <div className={classes.names}>
        <p>
          <span className={classes['first-name']}>{info.firstName}</span>{' '}
          <span className={classes['last-name']}>{info.lastName}</span>
        </p>
        <h4 className={classes.title}>{info.title}</h4>
      </div>
      <div className={classes.links}>
        <ul>
          {info.phoneNumber && (
            <li>
              {info.phoneNumber}
            </li>
          )}
          {info.email && (
            <li>
              {info.email}
            </li>
          )}
          {info.address && (
            <li>
              {info.address}
            </li>
          )}
          {info.linkedIn && (
            <li>
              {info.linkedIn}
            </li>
          )}
          {info.facebook && (
            <li>
              {info.facebook}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
