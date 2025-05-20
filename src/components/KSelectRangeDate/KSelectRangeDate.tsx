import React, { CSSProperties, useEffect, useRef, useState } from "react"
import Calendar from "react-calendar"
import "./KSelectRangeDateCustom.css"
//@ts-ignore
import LeftIcon from "../../assets/chevron-left.svg"
//@ts-ignore
import CalendarNewIcon from "../../assets/calendar-new.svg"
//@ts-ignore
import RightIcon from "../../assets/chevron-right.svg"
import "../../main.css"
import KButton from "../KButton"
import KSpan from "../KSpan"
import { lang } from "../../languages"

export interface KSelectRangeDateProps {
  value: DateRangeType
  onChange: (date: DateRangeType) => void
  width?: string
  height?: string
  border?: string
  backgroundColor?: string
  boxShadow?: string
  icon?: string
  padding?: string
  hoverBackgroundColor?: string
  borderRadius?: number
  anchorToButton?: boolean // opens the calendar relative to the button's position
  position?: "top" | "bottom" | "left" | "right" // position of the calendar relative to the button's position, has effect as long as anchorButton is true
  align?: "top" | "bottom" | "left" | "right" | "center" // lets to align the calendar, has effect as long as anchorButton is true
  minimumDate?: Date
  maximumDate?: Date
  popupCalendarBackground?: string
  hideBackdrop?: boolean
}

export type DateRangeType = Date | null | [Date | null, Date | null]

const KSelectRangeDate: React.FC<KSelectRangeDateProps> = (props) => {
  const width = props.width || "36px"
  const height = props.height || "36px"
  const padding = props.padding || "8px"
  const icon = props.icon || CalendarNewIcon
  const boxShadow = props.boxShadow || "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const backgroundColor = props.backgroundColor || "#FFF"
  const hoverBackgroundColor = props.hoverBackgroundColor || backgroundColor
  const borderRadius = props.borderRadius || 10
  const border = props.border || "none"
  const anchorToButton = props.anchorToButton || false
  const position = props.position || "bottom"
  const align = props.align || "center"
  const hideBackdrop = props.hideBackdrop || false

  const [value, setValue] = useState<DateRangeType>(props.value)
  const [range, setRange] = useState<DateRangeType>(props.value)

  const [leftCalendarYear, setLeftCalendarYear] = useState<number>(new Date().getFullYear())
  const [leftCalendarMonth, setLeftCalendarMonth] = useState<number>(new Date().getMonth())

  const [openCalendar, setOpenCalendar] = useState<boolean>(false)
  const [shorthandIndex, setShorthandIndex] = useState<{ current: number; approved: number }>({
    current: -1,
    approved: -1
  })

  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false)

  const convertToDayMonthYear = (date: Date | null): string => {
    if (!date) return "?"

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const monthNames: { [key: string]: string } = lang.common.months_short
    return `${day} ${monthNames[month.toString()]} ${year}`
  }

  const formatShortWeekday = (locale: string | undefined, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // Return only the first letter of the weekday
  }

  const formatMonthYear = (locale: string | undefined, date: Date): string => {
    const formattedDate = date.toLocaleDateString(locale, { month: "short", year: "numeric" })
    const [month, year] = formattedDate.split(" ")
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
    return `${capitalizedMonth}, ${year}`
  }

  const shorthandDateSelection = (range: number) => {
    const theDate = new Date()
    // if isMonth is false, then it is year
    const year = theDate.getFullYear()
    const month = theDate.getMonth()
    const day = theDate.getDate()

    const endDate = new Date(year, month, day)
    const startDate = new Date(year, month, day - range)
    setRange([startDate, endDate])
  }

  const onClickDayEvent = (clickedDate: Date) => {
    if (!Array.isArray(range)) return

    if (range[0] === null && range[1] === null) {
      setRange([clickedDate, null])
    } else if (range[0] !== null && range[1] === null) {
      const newRange: DateRangeType =
        range[0].getTime() > clickedDate.getTime() ? [clickedDate, range[0]] : [range[0], clickedDate]
      setRange(newRange)
      setOpenCalendar(false)
      setTimeout(() => {
        setOpenCalendar(true)
      }, 100)
    } else if (range[0] !== null && range[1] !== null) {
      setRange([clickedDate, null])
    }
    setShorthandIndex({ ...shorthandIndex, current: -1 })
  }

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      // Apply active class for current month
      if (!(Array.isArray(range) && range[0] && range[1])) return

      if (
        range[0]?.getFullYear() === date.getFullYear() &&
        range[0]?.getMonth() === date.getMonth() &&
        range[0]?.getDay() === date.getDay() &&
        range[1]?.getFullYear() === date.getFullYear() &&
        range[1]?.getMonth() === date.getMonth() &&
        range[1]?.getDay() === date.getDay()
      ) {
        return "active-day-first-day active-day-last-day"
      } else if (range[0]?.getFullYear() === date.getFullYear() && range[0]?.getMonth() === date.getMonth() && range[0]?.getDate() === date.getDate()) {
        return "active-day-first-day"
      } else if (range[1]?.getFullYear() === date.getFullYear() && range[1]?.getMonth() === date.getMonth() && range[1]?.getDate() === date.getDate()) {
        return "active-day-last-day"
      } else if (range[0]?.getTime() < date.getTime() && date.getTime() < range[1]?.getTime()) {
        const weekStartsOn = 1
        const col = (date.getDay() - weekStartsOn + 7) % 7
        if (col === 6) {
          return "active-day-range-day-left"
        } else if (col === 5) {
          return "active-day-range-day-right"
        } else {
          return "active-day-range-day-middle"
        }
      }

      return null
    }
  }

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const day = date.getDate()
      return (
        <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center tile-content-external-div">
          {Array.isArray(range) &&
            range[1] !== null &&
            ((range[0]?.getFullYear() === date.getFullYear() && range[0]?.getMonth() === date.getMonth() && range[0]?.getDate() === date.getDate()) ||
              (range[1]?.getFullYear() === date.getFullYear() && range[1]?.getMonth() === date.getMonth() && range[1]?.getDate() === date.getDate())) && (
              <abbr>{day}</abbr>
            )}
        </div>
      )
    }
    return null
  }

  useEffect(() => {
    props.onChange(value)
  }, [value])

  useEffect(() => {
    if (Array.isArray(range)) {
      if (range[0] !== null && range[1] !== null) {
        setLeftCalendarYear(range[0].getFullYear())
        setLeftCalendarMonth(range[0].getMonth())
      }
    }
  }, [range])

  const renderPopUpCalendar = () => {
    return (
      <div className="flex flex-row">
        <div
          className="w-[160px] bg-[#FFF] flex flex-col items-center gap-2 justify-start px-2.5 pt-5 pb-4 border-r-0"
          style={{
            border: "1px solid #F3F3F3",
            borderRightWidth: "0px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "16px"
          }}
        >
          <KButton
            onClick={() => {
              shorthandDateSelection(2)
              setShorthandIndex({ ...shorthandIndex, current: 0 })
            }}
            width="140px"
            background={shorthandIndex.current === 0 ? "#F7F7F7" : "#FFF"}
            textColor={shorthandIndex.current === 0 ? "#000" : "#999"}
            text={lang.button_text.yesterday}
            borderRadius={8}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(3)
              setShorthandIndex({ ...shorthandIndex, current: 1 })
            }}
            width="140px"
            background={shorthandIndex.current === 1 ? "#F7F7F7" : "#FFF"}
            textColor={shorthandIndex.current === 1 ? "#000" : "#999"}
            text={lang.button_text.last_three_days}
            borderRadius={8}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(7)
              setShorthandIndex({ ...shorthandIndex, current: 2 })
            }}
            width="140px"
            background={shorthandIndex.current === 2 ? "#F7F7F7" : "#FFF"}
            textColor={shorthandIndex.current === 2 ? "#000" : "#999"}
            text={lang.button_text.last_week}
            borderRadius={8}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(14)
              setShorthandIndex({ ...shorthandIndex, current: 3 })
            }}
            width="140px"
            background={shorthandIndex.current === 3 ? "#F7F7F7" : "#FFF"}
            textColor={shorthandIndex.current === 3 ? "#000" : "#999"}
            text={lang.button_text.last_two_week}
            borderRadius={8}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(31)
              setShorthandIndex({ ...shorthandIndex, current: 4 })
            }}
            width="140px"
            background={shorthandIndex.current === 4 ? "#F7F7F7" : "#FFF"}
            textColor={shorthandIndex.current === 4 ? "#000" : "#999"}
            text={lang.button_text.last_month}
            borderRadius={8}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row">
            <Calendar
              className="kselect-range-date left-calendar"
              allowPartialRange
              tileClassName={tileClassName}
              tileContent={tileContent}
              locale={lang.locale}
              value={range}
              activeStartDate={new Date(leftCalendarYear, leftCalendarMonth, 1)}
              onChange={(dates) => {}}
              onClickDay={(clickedDate) => {
                onClickDayEvent(clickedDate)
              }}
              defaultValue={null}
              next2Label={null}
              prev2Label={null}
              prevLabel={
                <img
                  src={LeftIcon}
                  onClick={() => {
                    setLeftCalendarMonth((current: number) => current - 1)
                  }}
                />
              }
              nextLabel={null}
              formatShortWeekday={formatShortWeekday}
              selectRange
              maxDetail="month"
              minDetail="month"
              minDate={props.minimumDate || undefined}
              maxDate={props.maximumDate || undefined}
            />
            <Calendar
              className="kselect-range-date right-calendar"
              tileClassName={tileClassName}
              tileContent={tileContent}
              locale={lang.locale}
              value={range}
              activeStartDate={new Date(leftCalendarYear, leftCalendarMonth + 1, 1)}
              allowPartialRange
              onChange={(dates) => {}}
              maxDetail="month"
              minDetail="month"
              onClickDay={(clickedDate) => {
                onClickDayEvent(clickedDate)
              }}
              defaultValue={null}
              next2Label={null}
              prev2Label={null}
              prevLabel={null}
              nextLabel={
                <img
                  src={RightIcon}
                  onClick={() => {
                    setLeftCalendarMonth((current: number) => current + 1)
                  }}
                />
              }
              formatShortWeekday={formatShortWeekday}
              formatMonthYear={formatMonthYear}
              selectRange
              minDate={props.minimumDate || undefined}
              maxDate={props.maximumDate || undefined}
            />
          </div>
          <div
            className="h-19 w-full bg-[#FFF] flex flex-row gap-4 py-4 px-5 justify-between items-center border-[1px] border-[#F3F3F3] border-t-0 rounded-b-[10px]"
            style={{
              borderBottomRightRadius: "16px",
              borderBottomLeftRadius: "0px"
            }}
          >
            <div className="flex items-center gap-1">
              <KSpan text={`${lang.common.range}:`} color="#999" />
              <KSpan
                text={
                  Array.isArray(range) ? `${convertToDayMonthYear(range[0])} - ${convertToDayMonthYear(range[1])}` : ""
                }
                color="#000"
                fontWeight={500}
              />
            </div>
            <div className="flex flex-row gap-3">
              <KButton
                text={lang.button_text.cancel}
                height="48px"
                width="108px"
                background="#FFF"
                textColor="#111"
                onClick={() => {
                  setRange(value)
                  setOpenCalendar(false)
                  setOpenBackdrop(false)
                  const approvedIndex = shorthandIndex.approved
                  setShorthandIndex({ ...shorthandIndex, current: approvedIndex })
                  if (Array.isArray(value) && value[0] !== null) {
                    setLeftCalendarYear(value[0].getFullYear())
                    setLeftCalendarMonth(value[0].getMonth())
                  }
                }}
              />
              <KButton
                text={lang.button_text.apply}
                height="48px"
                width="108px"
                background="#000"
                textColor="#FFF"
                disabled={Array.isArray(range) && (range[0] === null || range[1] === null)}
                onClick={() => {
                  setValue(range)
                  setOpenCalendar(false)
                  setOpenBackdrop(false)
                  const currentIndex = shorthandIndex.current
                  setShorthandIndex({ ...shorthandIndex, approved: currentIndex })
                  if (Array.isArray(range) && range[0] !== null) {
                    setLeftCalendarYear(range[0].getFullYear())
                    setLeftCalendarMonth(range[0].getMonth())
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const absolutePositionClassName = (position: string, align: string) => {
    const finalPosition = position
    let finalAlign = align
    if (finalPosition === "top" || finalPosition === "bottom") {
      finalAlign = align === "top" || align === "bottom" ? "center" : align
    } else if (finalPosition === "left" || finalPosition === "right") {
      finalAlign = align === "left" || align === "right" ? "center" : align
    }
    return `range-${finalPosition}-${finalAlign}`
  }

  return (
    <React.Fragment>
      {openBackdrop && !hideBackdrop && (
        <div className="w-[100vw] h-[100vh] fixed left-0 top-0 z-[49] bg-[#0000004d]" />
      )}
      {openCalendar && !anchorToButton && (
        <div
          className="w-[100vw] h-[100vh] fixed left-0 top-0 flex items-center justify-center z-50"
          style={props.popupCalendarBackground ? { background: props.popupCalendarBackground } : {}}
        >
          <div>{renderPopUpCalendar()}</div>
        </div>
      )}
      <div className="flex relative">
        {openCalendar && anchorToButton && (
          <div className={`absolute ${absolutePositionClassName(position, align)} z-[51]`}>
            <div>{renderPopUpCalendar()}</div>
          </div>
        )}
        <div className="flex flex-row justify-between gap-2 items-center">
          <div
            style={{
              borderRadius: borderRadius,
              boxShadow: boxShadow,
              border: border
            }}
          >
            <KButton
              icon={icon}
              onClick={() => {
                if (!openCalendar) {
                  setOpenCalendar(true)
                  setOpenBackdrop(true)
                } else {
                  setRange(value)
                  setOpenCalendar(false)
                  setOpenBackdrop(false)
                  const approvedIndex = shorthandIndex.approved
                  setShorthandIndex({ ...shorthandIndex, current: approvedIndex })
                  if (Array.isArray(value) && value[0] !== null) {
                    setLeftCalendarYear(value[0].getFullYear())
                    setLeftCalendarMonth(value[0].getMonth())
                  }
                }
              }}
              padding={padding}
              width={width}
              height={height}
              background={backgroundColor}
              hoverBackground={hoverBackgroundColor}
              borderRadius={borderRadius}
              shadowDisabled
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default KSelectRangeDate
