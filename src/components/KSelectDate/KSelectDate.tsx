import React, { CSSProperties, useEffect, useState } from "react"
import Calendar from "react-calendar"
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

export interface KSelectDateProps {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}
interface MonthSelectorType {
  monthName: string
  year: string
  date: Date
}
interface DaySelectorType {
  dayName: string
  dayOrderInMonth: number
  date: Date
}

const KSelectDate: React.FC<KSelectDateProps> = (props) => {
  const [value, setValue] = useState<Date | undefined>(props.value)
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(props.value)
  const [nextMonths, setNextMonths] = useState<MonthSelectorType[]>([])
  const [weekDays, setWeekDays] = useState<DaySelectorType[]>([])
  const [openCalendar, setOpenCalendar] = useState<boolean>(false)

  const formatShortWeekday = (locale: string | undefined, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // Return only the first letter of the weekday
  }

  const formatMonthYear = (locale: string | undefined, date: Date): string => {
    const formattedDate = date.toLocaleDateString(locale, { month: "short", year: "numeric" })
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

  const getNextMonths = (date: Date): MonthSelectorType[] => {
    return Array.from({ length: 4 }, (_, i) => {
      const newDate = new Date(date.getFullYear(), date.getMonth() + i, 1)
      return {
        monthName: newDate.toLocaleString("en-US", { month: "long" }),
        year: newDate.getFullYear().toString(),
        date: newDate
      }
    })
  }

  const getWeekDays = (date: Date): DaySelectorType[] => {
    const startOfWeek = new Date(date)
    const dayOfWeek = startOfWeek.getDay()
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek // If Sunday (0), move back 6 days; otherwise move back (1 - dayOfWeek) days
    startOfWeek.setDate(startOfWeek.getDate() + diffToMonday)

    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      return {
        dayName: day.toLocaleDateString("en-US", { weekday: "short" }),
        dayOrderInMonth: day.getDate(),
        date: day
      }
    })
  }

  const renderPopUpCalendar = () => {
    return (
      <div className="flex flex-col gap-0">
        <Calendar
          onClickDay={onClickDay}
          locale="en-US"
          value={calendarDate || null}
          defaultValue={null}
          next2Label={null}
          prev2Label={null}
          prevLabel={<img src={LeftIcon} />}
          nextLabel={<img src={RightIcon} />}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
        />
        <div className="h-19 w-[350px] bg-[#FFF] flex flex-row gap-4 py-4 justify-center border-[1px] border-[#E7E7E7] border-t-0 rounded-b-[10px]">
          <KButton
            text="Cancel"
            height="44px"
            width="160px"
            background="#FFF"
            textColor="#111"
            onClick={() => {   
              setOpenCalendar(false)
            }}
          />
          <KButton
            text="Apply"
            height="44px"
            width="160px"
            background="#F2FE67"
            textColor="#111"
            onClick={() => {
              setValue(calendarDate)
              setOpenCalendar(false)
            }}
          />
        </div>
      </div>
    )
  }

  const monthSelector = (text: string, date: Date) => {
    return (
      <div
        key={`${text}-${date}`}
        className={`w-[135px] h-9 box-sizing`}
        style={{
          borderRadius: 999,
          border: value?.getMonth() === date.getMonth() ? "1px solid #111" : "1px solid #E7E7E7"
        }}
      >
        <KButton
          text={text}
          shadowDisabled={true}
          onClick={() => {
            if (date.getTime() === value?.getTime()) {
              setValue(undefined)
            } else {
               setValue(date)
            }
           
          }}
          background={value?.getMonth() === date.getMonth() ? "#111" : "#FFF"}
          textColor={value?.getMonth() === date.getMonth() ? "#FFF" : "#111"}
          borderRadius={999}
          padding="8px 16px"
          height="34px"
        />
      </div>
    )
  }

  const daySelector = (text: string, date: Date) => {
    return (
      <div
        key={`${text}-${date}`}
        className={`w-[85px] h-[104px] flex flex-col justify-between py-3 px-2.5 rounded-[10px] ${
          date.getTime() === value?.getTime() ? "bg-[#F8FEA3]" : "bg-[#F5F5F5]"
        } cursor-pointer`}
        onClick={() => {
          if (date.getTime() === value?.getTime()) {
            setValue(undefined)
          } else {
             setValue(date)
          }
        }}
      >
        <div>
          <img src={CalendarIcon} alt="calendar" />
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
      setValue(newDate)
    } else {
      const newDate = new Date()
      if (isNextWeek) {
        newDate.setDate(newDate.getDate() + 7)
      } else {
        newDate.setDate(newDate.getDate() - 7)
      }
      setValue(newDate)
    }
  }

  useEffect(() => {
    setNextMonths(getNextMonths(value || new Date()))
    setWeekDays(getWeekDays(value || new Date()))
    setCalendarDate(value)
    props.onChange(value)
  }, [value])

  return (
    <React.Fragment>
      {openCalendar && (
        <div className="w-[100vw] h-[100vh] fixed left-0 top-0 flex items-center justify-center z-50">
          <div>{renderPopUpCalendar()}</div>
        </div>
      )}
      <div>
        <div className={`flex flex-col gap-4 ${openCalendar && "blur-2xl"}`}>
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="flex flex-row gap-2">
              {nextMonths.map((month, i) => {
                return monthSelector(`${month.monthName} ${month.year}`, month.date)
              })}
            </div>
            <div>
              <img src={SeparatorIcon} />
            </div>
            <div>
              <KButton
                icon={CalendarIcon}
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
              text="Previous Week"
              padding="6px"
              leftIcon={LeftIcon}
              onClick={() => {
                changeWeeks(value, false)
              }}
              width="130px"
              height="32px"
              background="#FFF"
            />
            <KButton
              text="Next Week"
              padding="6px"
              rightIcon={RightIcon}
              onClick={() => {
                changeWeeks(value, true)
              }}
              width="130px"
              height="32px"
              background="#FFF"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default KSelectDate
