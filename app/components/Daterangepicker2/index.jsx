import React, { useState, useRef } from "react";
import dayjs from "dayjs";

import Input from "@/components/Input";
import { dateFormats } from "@/constants";
import { ReactComponent as IconCalendar } from "@/assets/images/icon-calendar.svg";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import Calendar from "./Calendar";
import * as S from "./styled";

const checkIsValidDate = (date) => {
  const dateObj = dayjs(date);
  const [year, month, day] = (date || "").split("/");

  return (
    dateObj.isValid() &&
    dateObj.format(dateFormats.DATE_SLASH) ===
      [year, month?.padStart(2, 0), day?.padStart(2, 0)].join("/")
  );
};

const getValidDate = (date) => {
  if (checkIsValidDate(date)) {
    return date;
  }

  return null;
};

const Daterangepicker = ({
  startDate,
  endDate,
  onChange,
  onBlur,
  startName,
  endName,
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef();

  const handleTogglePicker = () => {
    setOpen(!isOpen);
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const handleBlur = (e) => {
    if (onBlur) onBlur(e);

    if (onChange) {
      if (checkIsValidDate(startDate) && checkIsValidDate(endDate)) {
        onChange(
          ...[
            dayjs(startDate).format("YYYY/MM/DD"),
            dayjs(endDate).format("YYYY/MM/DD"),
          ].sort(),
        );
      } else {
        onChange("", "");
      }
    }
  };

  const handleInputStartDateChange = (newStartDate) => {
    if (onChange) onChange(newStartDate, endDate);
  };

  const handleInputEndDateChange = (newEndDate) => {
    if (onChange) onChange(startDate, newEndDate);
  };

  const handleCalendarChange = (newStartDate, newEndDate) => {
    if (onChange) {
      onChange(newStartDate, newEndDate);
    }

    setOpen(false);
  };

  useOnClickOutside(wrapperRef, () => setOpen(false));

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.InputWrapper>
        <Input
          value={startDate}
          autoComplete="off"
          placeholder={dateFormats.DATE_SLASH}
          onChange={handleInputStartDateChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
          name={startName}
        />
        <IconCalendar onClick={handleTogglePicker} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input
          value={endDate}
          autoComplete="off"
          placeholder={dateFormats.DATE_SLASH}
          onChange={handleInputEndDateChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
          name={endName}
        />
        <IconCalendar onClick={handleTogglePicker} />
      </S.InputWrapper>

      {isOpen && (
        <S.CalendarWrapper>
          <Calendar
            startDate={getValidDate(startDate || undefined)}
            endDate={getValidDate(endDate || undefined)}
            onChange={handleCalendarChange}
          />
        </S.CalendarWrapper>
      )}
    </S.Wrapper>
  );
};

export default Daterangepicker;
