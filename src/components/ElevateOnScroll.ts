import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

interface Props {
  children: React.ReactElement;
}

export default function ElevateOnScroll(props: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(props.children, { elevation: trigger ? 4 : 0, });
}
