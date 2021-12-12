import {Fragment, useMemo} from "react";
import AtOb from "./a-to-b";
import CalendarCircle from "./calendar-circle";
import Clock from "./clock";
import Person from "./person";
import PhoneCircle from "./phone-circle";
import PinCircle from "./pin-circle";
import PlusCircle from "./plus-circle";
import Search from "./search";
import TimeLeft from "./time-left";
import Timer from "./timer";
import Times from "./times";

const MAP = {
  "a-to-b": AtOb,
  "calendar-circle": CalendarCircle,
  "clock": Clock,
  "person": Person,
  "phone-circle": PhoneCircle,
  "pin-circle": PinCircle,
  "plus-circle": PlusCircle,
  "search": Search,
  "time-left": TimeLeft,
  "timer": Timer,
  "times": Times,
};

export type IconTypes = "a-to-b" | "calendar-circle" | "clock" | "person" | "phone-circle" | "pin-circle" | "plus-circle" | "search" | "time-left" | "timer" | "times";
export type IconProps = {
  type: IconTypes,
  className?: string,
}

export default function Icon({type, className, ...props}:IconProps) {
  const Component = useMemo(() => {
    return MAP[type] ?? Fragment;
  }, [type])
  return (
    <Component className={className} {...props}/>
  )
}
