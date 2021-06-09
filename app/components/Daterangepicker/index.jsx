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

const Daterangepicker = ({ value, onChange, onBlur, ...rest }, ref) => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef();
  const [startDate, endDate] = (value || "").split("~");

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
          [
            dayjs(startDate).format("YYYY/MM/DD"),
            dayjs(endDate).format("YYYY/MM/DD"),
          ].join("~"),
        );
      } else {
        onChange("");
      }
    }
  };

  const handleInputChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  const handleCalendarChange = (newStartDate, newEndDate) => {
    if (onChange) {
      onChange([newStartDate, newEndDate].filter(Boolean).join("~"));
    }

    setOpen(false);
  };

  useOnClickOutside(wrapperRef, () => setOpen(false));

  return (
    <S.Wrapper ref={wrapperRef}>
      <Input
        value={value}
        ref={ref}
        autoComplete="off"
        placeholder={dateFormats.DATE_SLASH}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...rest}
      />
      <IconCalendar onClick={handleTogglePicker} />
      {isOpen && (
        <S.CalendarWrapper>
          <Calendar
            startDate={getValidDate(startDate)}
            endDate={getValidDate(endDate)}
            onChange={handleCalendarChange}
          />
        </S.CalendarWrapper>
      )}
    </S.Wrapper>
  );
};

export default React.forwardRef(Daterangepicker);
