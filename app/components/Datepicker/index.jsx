import React, { useState, useRef } from "react";
import dayjs from "dayjs";

import Input from "@/components/Input";
import Calendar from "@/components/Calendar";
import { dateFormats } from "@/constants";
import { ReactComponent as IconCalendar } from "@/assets/images/icon-calendar.svg";
import useOnClickOutside from "@/hooks/useOnClickOutside";

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

  return dayjs().format(dateFormats.DATE_SLASH);
};

const Datepicker = ({ value, onChange, onBlur, ...rest }, ref) => {
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
      if (checkIsValidDate(value)) {
        onChange(dayjs(value).format("YYYY/MM/DD"));
      } else {
        onChange("");
      }
    }
  };

  const handleInputChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  const handleCalendarChange = (newValue) => {
    if (onChange) onChange(newValue);

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
            value={getValidDate(value)}
            onChange={handleCalendarChange}
          />
        </S.CalendarWrapper>
      )}
    </S.Wrapper>
  );
};

export default React.forwardRef(Datepicker);
