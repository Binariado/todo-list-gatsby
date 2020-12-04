import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { css } from "@emotion/react"

const AppDate = withStyles((theme) => ({
  root: {

  }
}))((props) => <DatePicker {...props} />);


const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return ( 
    <div className="dataFullWidth">
        <AppDate
        autoOk
        disableToolbar
        //variant="inline"
        //disabled={disabled}
        format="yyyy-MM-dd"
        margin="normal"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
        
      />
    </div>
  );
};

export default StaticDatePicker;
