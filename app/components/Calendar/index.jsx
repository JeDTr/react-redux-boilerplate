import React, { useState, createContext, useContext } from "react";
import dayjs from "dayjs";
import _range from "lodash-es/range";

import * as S from "./styled";

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const defaultFormatDate = "YYYY/MM/DD";

const CalendarContext = createContext();

const isValidDate = (date, format) => dayjs(date).format(format) === date;

const DateCell = ({ data, ...rest }) => {
  const { value, onChange } = useContext(CalendarContext);

  return (
    <S.DayCell>
      <S.DayCellInner
        isSelected={data && data.isSame(value, "date")}
        onClick={() => data && onChange(data.format(defaultFormatDate))}
        {...rest}
      />
    </S.DayCell>
  );
};

const DayList = ({ todayObj, dateObj }) => {
  const thisMonth = dateObj.month();
  const thisYear = dateObj.year();
  const daysInMonth = dateObj.daysInMonth();
  const beginingOfMonthObj = dayjs(`${thisYear}-${thisMonth + 1}-01`);

  if (dateObj.isBefore(todayObj, "month")) {
    return (
      <>
        {_range(beginingOfMonthObj.day()).map((i) => (
          <DateCell key={i} />
        ))}
        {_range(1, daysInMonth + 1).map((d) => (
          <DateCell
            key={d}
            variant="past"
            data={beginingOfMonthObj.add(d - 1, "day")}
          >
            {d}
          </DateCell>
        ))}
      </>
    );
  }

  if (dateObj.isSame(todayObj, "month")) {
    const dateOfToday = todayObj.date();

    return (
      <>
        {_range(beginingOfMonthObj.day()).map((i) => (
          <DateCell key={i} />
        ))}
        {_range(1, dateOfToday).map((d) => (
          <DateCell
            key={d}
            variant="past"
            data={beginingOfMonthObj.add(d - 1, "day")}
          >
            {d}
          </DateCell>
        ))}
        <DateCell variant="present" data={todayObj}>
          {dateOfToday}
        </DateCell>
        {_range(dateOfToday + 1, daysInMonth + 1).map((d) => (
          <DateCell
            key={d}
            variant="future"
            data={beginingOfMonthObj.add(d - 1, "day")}
          >
            {beginingOfMonthObj.add(d - 1, "day").date()}
          </DateCell>
        ))}
      </>
    );
  }

  return (
    <>
      {_range(beginingOfMonthObj.day()).map((i) => (
        <DateCell key={i} />
      ))}
      {_range(1, daysInMonth + 1).map((d) => (
        <DateCell
          key={d}
          variant="future"
          data={beginingOfMonthObj.add(d - 1, "day")}
        >
          {d}
        </DateCell>
      ))}
    </>
  );
};

const Calendar = ({ className, value, onChange }) => {
  const todayObj = dayjs();
  const [dateObj, setDateObj] = useState(() =>
    isValidDate(value, defaultFormatDate) ? dayjs(value) : todayObj,
  );

  const handlePrevClick = () => {
    setDateObj(dateObj.subtract(1, "month"));
  };

  const handleNextClick = () => {
    setDateObj(dateObj.add(1, "month"));
  };

  return (
    <S.Wrapper className={className}>
      <CalendarContext.Provider value={{ value, onChange }}>
        <S.Nav>
          <S.NavButton
            onClick={handlePrevClick}
            disabled={dateObj.year() <= 1000 && dateObj.month() === 0} // min 1000/01
          >
            &lt; Prev
          </S.NavButton>
          <S.MonthYear>{dateObj.format(defaultFormatDate)}</S.MonthYear>
          <S.NavButton onClick={handleNextClick}>Next &gt;</S.NavButton>
        </S.Nav>
        <S.WeekDayContainer>
          {weekDays.map((weekDay) => (
            <S.WeekDay key={weekDay}>{weekDay}</S.WeekDay>
          ))}
        </S.WeekDayContainer>
        <S.DayContainer>
          <DayList todayObj={todayObj} dateObj={dateObj} />
        </S.DayContainer>
      </CalendarContext.Provider>
    </S.Wrapper>
  );
};

export default Calendar;
