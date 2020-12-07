import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { css } from "@emotion/react"

const fullWidth = css`
  width: 100%;
  height: inherit;
  display: flex;
  .MuiPickersStaticWrapper-staticWrapperRoot{
    width: 100%;
    display: flex;
    .MuiPickersBasePicker-container{
      height: 100%;
      .MuiPickersBasePicker-pickerView{
        width: 100%;
        max-width: 100%;
        height: 100%;
        .MuiPickersCalendarHeader-daysHeader{
          .MuiPickersCalendarHeader-dayLabel{
            width: 100%;
          }
        }
        .MuiPickersCalendar-transitionContainer{
          height: 100%;
        }
        .MuiPickersCalendar-transitionContainer > div {
          display: flex;
          /* grid-template-columns: auto auto auto; */
          flex-direction: column;
          height: 100%;
          .MuiPickersCalendar-week{
            height: 100%;
          }
          .MuiPickersCalendar-week > div{
            width: 100%;
            text-align: center;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;

const FullWidthDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return ( 
    <div css={fullWidth}>
        <DatePicker
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

export default FullWidthDatePicker;
