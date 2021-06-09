import React, { useState, createContext, useContext, useEffect } from "react";
import dayjs from "dayjs";
import _range from "lodash-es/range";

import { dateFormats } from "@/constants";

import * as S from "./styled";

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const CalendarContext = createContext();

const isValidDate = (date, format) => dayjs(date).format(format) === date;

const DateCell = ({ data, ...rest }) => {
  const {
    selectedDate,
    setSelectedDate,
    onChange,
    hoveredDateObj,
    setHoveredDateObj,
  } = useContext(CalendarContext);

  const handleMouseOver = () => {
    setHoveredDateObj(data);
  };

  const handleMouseOut = () => {
    setHoveredDateObj(null);
  };

  const isBetweenHoverRange =
    data &&
    selectedDate.startDate &&
    !selectedDate.endDate &&
    ((data.isAfter(selectedDate.startDate) && data.isBefore(hoveredDateObj)) ||
      (data.isBefore(selectedDate.startDate) && data.isAfter(hoveredDateObj)));

  const handleClick = () => {
    if (data) {
      if (
        (selectedDate.startDate && selectedDate.endDate) ||
        !selectedDate.startDate
      ) {
        setSelectedDate({
          startDate: data.format(dateFormats.DATE_SLASH),
          endDate: null,
        });
      } else {
        onChange(
          ...[
            selectedDate.startDate,
            data.format(dateFormats.DATE_SLASH),
          ].sort(),
        );
      }
    }
  };

  return (
    <S.DayCell>
      <S.DayCellInner
        isSelected={
          data &&
          (data.isSame(selectedDate.startDate, "date") ||
            data.isSame(selectedDate.endDate, "date"))
        }
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        isBetweenHoverRange={isBetweenHoverRange}
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

const Calendar = ({ className, startDate, endDate, onChange }) => {
  const todayObj = dayjs();
  // date use for show calendar month
  const [dateObj, setDateObj] = useState(() =>
    isValidDate(startDate, dateFormats.DATE_SLASH)
      ? dayjs(startDate)
      : todayObj,
  );
  // date value
  const [selectedDate, setSelectedDate] = useState({
    startDate,
    endDate,
  });
  // hover
  const [hoveredDateObj, setHoveredDateObj] = useState(null);

  const handlePrevClick = () => {
    setDateObj(dateObj.subtract(1, "month"));
  };

  const handleNextClick = () => {
    setDateObj(dateObj.add(1, "month"));
  };

  useEffect(() => {
    setSelectedDate({ startDate, endDate });
  }, [startDate, endDate]);

  return (
    <S.Wrapper className={className}>
      <CalendarContext.Provider
        value={{
          onChange,
          selectedDate,
          setSelectedDate,
          hoveredDateObj,
          setHoveredDateObj,
        }}
      >
        <S.Nav>
          <S.NavButton
            onClick={handlePrevClick}
            disabled={dateObj.year() <= 1000 && dateObj.month() === 0} // min 1000/01
          >
            &lt; Prev
          </S.NavButton>
          <S.MonthYear>
            {dateObj.format(dateFormats.DATE_SLASH_YEAR_MONTH)}
          </S.MonthYear>
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
