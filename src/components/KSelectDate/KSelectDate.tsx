import React, { useEffect, useState } from "react"
import Calendar, { TileDisabledFunc } from "react-calendar"
import "./CalendarCustom.css"
//@ts-ignore
import LeftIcon from "../../assets/chevron-left.svg"
//@ts-ignore
import SeparatorIcon from "../../assets/separator.svg"
//@ts-ignore
import CalendarIcon from "../../assets/calendar.svg"
//@ts-ignore
import RightIcon from "../../assets/chevron-right.svg"
import "../../main.css"
import KButton from "../KButton"
import KSpan from "../KSpan"
import { lang } from "../../languages"

export interface KSelectDateProps {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
  minimumDate?: Date
  onlyMonthSelection?: boolean // if true, only month selection is possible
  hideBody?: boolean // hides the body and just shows the button with the icon
  width?: string
  height?: string
  border?: string
  backgroundColor?: string
  boxShadow?: string
  icon?: string
  padding?: string
  hoverBackgroundColor?: string
  borderRadius?: number
  anchorToButton?: boolean // opens the calendar relative to the button's position, does not have any effect if body is not hidden.
  position?: "top" | "bottom" | "left" | "right" // position of the calendar relative to the button's position, has effect as long as anchorButton is true
  align?: "top" | "bottom" | "left" | "right" | "center" // lets to align the calendar, has effect as long as anchorButton is true
  hideBackdrop?: boolean
  isTileDisabled?: TileDisabledFunc
  applyUndefinedValue?: boolean // if this prop's value is false, makes the Apply button disabled when chosen date is undefined
  buttonText?: string
}
interface MonthSelectorType {
  monthName: string
  year: string
  date: Date
  monthIndex: string | number
}
interface DaySelectorType {
  dayName: string
  dayOrderInMonth: number
  date: Date
}
interface MonthTextType {
  [key: string]: string
}

const KSelectDate: React.FC<KSelectDateProps> = (props) => {
  const width = props.width || "36px"
  const height = props.height || "36px"
  const padding = props.padding || "8px"
  const icon = props.icon || CalendarIcon
  const boxShadow = props.boxShadow || "0 0 0 1px rgba(17, 17, 17, 0.04), 0 1px 1px 0 rgba(17, 17, 17, 0.04)"
  const backgroundColor = props.backgroundColor || "#FFF"
  const hoverBackgroundColor = props.hoverBackgroundColor || backgroundColor
  const borderRadius = props.borderRadius || 10
  const border = props.border || "none"

  const [value, setValue] = useState<Date | undefined>(props.value)
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(props.value)
  const [dummyDate, setDummyDate] = useState<Date | undefined>(props.value)
  const [nextMonths, setNextMonths] = useState<MonthSelectorType[]>([])
  const [weekDays, setWeekDays] = useState<DaySelectorType[]>([])
  const [openCalendar, setOpenCalendar] = useState<boolean>(false)

  const onlyMonthSelection = props.onlyMonthSelection || false
  const hideBody = props.hideBody || false

  const anchorToButton = props.anchorToButton || false
  const position = props.position || "bottom"
  const align = props.align || "center"

  const hideBackdrop = props.hideBackdrop || false
  const applyUndefinedValue = props.applyUndefinedValue !== undefined ? props.applyUndefinedValue : true

  const formatShortWeekday = (locale: string | undefined, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // Return only the first letter of the weekday
  }

  const formatMonthYear = (locale: string | undefined, date: Date): string => {
    const formattedDate = date.toLocaleDateString(lang.locale, { month: "short", year: "numeric" })
    const [month, year] = formattedDate.split(" ")
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
    return `${capitalizedMonth}, ${year}`
  }

  const onClickDay = (date: Date) => {
    if (date.getTime() === calendarDate?.getTime()) {
      setCalendarDate(undefined)
    } else {
      setCalendarDate(date)
    }
  }
  const onClickMonth = (date: Date) => {
    if (date.getTime() === calendarDate?.getTime()) {
      setCalendarDate(undefined)
    } else {
      setCalendarDate(date)
    }
  }

  const getNextMonths = (date: Date | undefined) => {
    if (date) {
      const updatedMonths = Array.from({ length: 4 }, (_, i) => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + (i - 1), 1)
        return {
          monthName: newDate.toLocaleString("en-US", { month: "long" }),
          year: newDate.getFullYear().toString(),
          date: newDate,
          monthIndex: newDate.getMonth().toString()
        }
      })
      setNextMonths(updatedMonths)
    }
  }

  const getWeekDays = (date: Date | undefined) => {
    if (date) {
      const startOfWeek = new Date(date)
      const dayOfWeek = startOfWeek.getDay()
      const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek // If Sunday (0), move back 6 days; otherwise move back (1 - dayOfWeek) days
      startOfWeek.setDate(startOfWeek.getDate() + diffToMonday)

      const updatedDays = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek)
        day.setDate(startOfWeek.getDate() + i)
        return {
          dayName: day.toLocaleDateString(lang.locale, { weekday: "short" }),
          dayOrderInMonth: day.getDate(),
          date: day
        }
      })

      setWeekDays(updatedDays)
    }
  }

  const renderPopUpCalendar = () => {
    return (
      <div className="flex flex-col gap-0">
        <Calendar
          onClickDay={onClickDay}
          {...(onlyMonthSelection && { onClickMonth: onClickMonth })}
          {...(onlyMonthSelection && { maxDetail: "year" })}
          locale={lang.locale}
          value={calendarDate || null}
          defaultValue={null}
          next2Label={null}
          prev2Label={null}
          prevLabel={<img src={LeftIcon} />}
          nextLabel={<img src={RightIcon} />}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
          minDate={props.minimumDate || undefined}
          {...(props.isTileDisabled && { tileDisabled: props.isTileDisabled })}
        />
        <div className="h-19 w-[350px] bg-[#FFF] flex flex-row gap-4 py-4 justify-center border-[1px] border-[#E7E7E7] border-t-0 rounded-b-[10px]">
          <KButton
            text={lang.button_text.cancel}
            height="44px"
            width="160px"
            background="#FFF"
            textColor="#111"
            onClick={() => {
              setOpenCalendar(false)
            }}
          />
          <KButton
            text={lang.button_text.apply}
            height="44px"
            width="160px"
            background="#000"
            disabled={!applyUndefinedValue && !calendarDate}
            textColor="#FFF"
            onClick={() => {
              setValue(calendarDate)
              setOpenCalendar(false)
            }}
          />
        </div>
      </div>
    )
  }

  const monthSelector = (month: string, year: string, date: Date, monthIndex: string | number) => {
    const monthText: MonthTextType = lang.common.months_short

    const text = `${monthText[monthIndex]}, ${year}`

    const inMonth = dummyDate ? dummyDate?.getMonth() === date.getMonth() : new Date().getMonth() === date.getMonth()

    return (
      <div
        key={`${text}-${date}`}
        className={`w-[135px] h-9 box-sizing`}
        style={{
          borderRadius: 999,
          border: inMonth ? "1px solid #111" : "1px solid #E7E7E7"
        }}
      >
        <KButton
          text={text}
          shadowDisabled={true}
          onClick={() => {
            if (date.getTime()) {
              setDummyDate(date)
            }
          }}
          background={inMonth ? "#111" : "#FFF"}
          textColor={inMonth ? "#FFF" : "#111"}
          borderRadius={999}
          padding="8px 16px"
          height="34px"
        />
      </div>
    )
  }

  const daySelector = (text: string, date: Date) => {
    const dateNotAllowed = props.minimumDate && date < props.minimumDate
    return (
      <div
        key={`${text}-${date}`}
        className={`w-[85px] h-[104px] flex flex-col justify-between py-3 px-2.5 rounded-[10px] cursor-pointer`}
        style={{
          background: dateNotAllowed
            ? "rgb(170, 170, 170, 0.7)"
            : date.getTime() === value?.getTime()
            ? "#F8FEA3"
            : "#F5F5F5"
        }}
        onClick={() => {
          if (dateNotAllowed) {
            return
          }

          if (date.getTime() === value?.getTime()) {
            setValue(undefined)
          } else {
            setValue(date)
          }
        }}
      >
        <div>
          <img src={icon} alt="calendar" />
        </div>
        <KSpan text={text} fontWeight={500} color="#111" />
      </div>
    )
  }

  const changeWeeks = (date: Date | undefined, isNextWeek: boolean) => {
    if (date) {
      const newDate = new Date(date)
      if (isNextWeek) {
        newDate.setDate(newDate.getDate() + 7)
      } else {
        newDate.setDate(newDate.getDate() - 7)
      }
      setDummyDate(newDate)
    } else {
      const newDate = new Date()
      if (isNextWeek) {
        newDate.setDate(newDate.getDate() + 7)
      } else {
        newDate.setDate(newDate.getDate() - 7)
      }
      setDummyDate(newDate)
    }
  }

  const absolutePositionClassName = (position: string, align: string) => {
    const finalPosition = position
    let finalAlign = align
    if (finalPosition === "top" || finalPosition === "bottom") {
      finalAlign = align === "top" || align === "bottom" ? "center" : align
    } else if (finalPosition === "left" || finalPosition === "right") {
      finalAlign = align === "left" || align === "right" ? "center" : align
    }
    return `date-${finalPosition}-${finalAlign}`
  }

  useEffect(() => {
    if (value) {
      setDummyDate(value)
    } else if (props.minimumDate) {
      setDummyDate(props.minimumDate)
    }
    props.onChange(value)
  }, [value])

  useEffect(() => {
    const today = new Date()
    if (!props.value) {
      getNextMonths(props.minimumDate || today)
      getWeekDays(props.minimumDate || today)
    }
  }, [])

  useEffect(() => {
    if (dummyDate && props.minimumDate && dummyDate < props.minimumDate) {
      getNextMonths(props.minimumDate)
      getWeekDays(props.minimumDate)
    } else {
      getNextMonths(dummyDate)
      getWeekDays(dummyDate)
    }
  }, [dummyDate])

  return (
    <React.Fragment>
      {openCalendar && !hideBackdrop && (
        <div className="w-[100vw] h-[100vh] fixed left-0 top-0 z-[49] bg-[#0000004d]" />
      )}
      {openCalendar && (!hideBody || !anchorToButton) && (
        <div className="w-[100vw] h-[100vh] fixed left-0 top-0 flex items-center justify-center z-50">
          <div>{renderPopUpCalendar()}</div>
        </div>
      )}
      {!hideBody ? (
        <div>
          <div className={`flex flex-col gap-4 ${openCalendar && "blur-2xl"}`}>
            <div className="flex flex-row justify-between gap-2 items-center">
              <div className="flex flex-row gap-2">
                {nextMonths.map((month, i) => {
                  return monthSelector(month.monthName, month.year, month.date, month.monthIndex)
                })}
              </div>
              <div>
                <img src={SeparatorIcon} />
              </div>
              <div>
                <KButton
                  icon={icon}
                  onClick={() => {
                    setOpenCalendar(true)
                    setCalendarDate(value)
                  }}
                  padding="8px"
                  height="36px"
                  background="#FFF"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between gap-1 items-center">
              {weekDays.map((day, i) => {
                return daySelector(`${day.dayOrderInMonth}, ${day.dayName}`, day.date)
              })}
            </div>
            <div className="flex flex-row justify-between items-center">
              <KButton
                text={lang.button_text.previous_week}
                padding="6px"
                leftIcon={LeftIcon}
                onClick={() => {
                  changeWeeks(dummyDate, false)
                }}
                width="130px"
                height="32px"
                background="#FFF"
              />
              <KButton
                text={lang.button_text.next_week}
                padding="6px"
                rightIcon={RightIcon}
                onClick={() => {
                  changeWeeks(dummyDate, true)
                }}
                width="130px"
                height="32px"
                background="#FFF"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex relative">
          {openCalendar && anchorToButton && (
            <div className={`absolute ${absolutePositionClassName(position, align)} z-[51]`}>
              <div>{renderPopUpCalendar()}</div>
            </div>
          )}
          <div
            style={{
              borderRadius: borderRadius,
              boxShadow: boxShadow,
              border: border
            }}
          >
            <KButton
              {...(props.buttonText ? { leftIcon: icon } : { icon })}
              {...(props.buttonText && { text: props.buttonText })}
              onClick={() => {
                if (openCalendar) {
                  setOpenCalendar(false)
                } else {
                  setOpenCalendar(true)
                  setCalendarDate(value)
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
      )}
    </React.Fragment>
  )
}

export default KSelectDate
