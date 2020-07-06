import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = React.PropsWithoutRef<NavLinkProps> & React.RefAttributes<HTMLAnchorElement>

const activeClassName = 'Mui-selected';

function DrawerLink(props: Props, ref: React.Ref<HTMLAnchorElement>) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.classList.contains(activeClassName)) {
      event.preventDefault();
    }
  };
  return <NavLink {...props} ref={ref} activeClassName={activeClassName} replace onClick={handleClick} />;
}

export default React.memo(React.forwardRef(DrawerLink));
