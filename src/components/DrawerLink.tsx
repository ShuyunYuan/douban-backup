import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = React.PropsWithoutRef<NavLinkProps> & React.RefAttributes<HTMLAnchorElement>

const activeClassName = 'Mui-selected';

function DrawerLink(props: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.classList.contains(activeClassName)) {
      event.preventDefault();
    }
  };
  return <NavLink {...props} activeClassName={activeClassName} replace onClick={handleClick} />;
}

export default React.memo(DrawerLink);
