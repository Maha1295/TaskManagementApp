import './nav.css';

const Nav = (props) => {
  return <div className='nav'>
    {props.children}
    </div>;
};

export default Nav;
