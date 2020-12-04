import React, { Fragment, useEffect } from "react";
import SwipeableViews from 'react-swipeable-views';

export default function ComponentSwipe(props) {
  const { children, value, index, ...other } = props;

  useEffect(()=>{
    
  })
  return (
    <Fragment>
      <SwipeableViews
        {...props}
      >
        {children}
      </SwipeableViews>
    </Fragment>
  )
}
