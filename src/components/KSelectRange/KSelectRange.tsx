import React, { CSSProperties, useEffect, useState } from "react"
import Calendar from "react-calendar"
import "./KSelectRangeCustom.css"
//@ts-ignore
import LeftIcon from "../../assets/chevron-left.svg"
//@ts-ignore
import SeparatorIcon from "../../assets/separator.svg"
//@ts-ignore
import CalendarIcon from "../../assets/calendar-new.svg"
//@ts-ignore
import RightIcon from "../../assets/chevron-right.svg"
import "../../main.css"
import KButton from "../KButton"
import KSpan from "../KSpan"

export interface KSelectRangeProps {
  value: DateRangeType
  onChange: (date: DateRangeType) => void
}

export type DateRangeType = Date | null | [Date | null, Date | null]

const KSelectRange: React.FC<KSelectRangeProps> = (props) => {
  const [value, setValue] = useState<DateRangeType>(props.value)
  const [range, setRange] = useState<DateRangeType>(props.value)

  const [openCalendar, setOpenCalendar] = useState<boolean>(false)
  const [shorthandIndex, setShorthandIndex] = useState<{ current: number; approved: number }>({
    current: -1,
    approved: -1
  })

  const formatShortWeekday = (locale: string | undefined, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // Return only the first letter of the weekday
  }

  const formatMonthYear = (locale: string | undefined, date: Date): string => {
    const formattedDate = date.toLocaleDateString(locale, { month: "short", year: "numeric" })
    const [month, year] = formattedDate.split(" ")
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()
    return `${capitalizedMonth}, ${year}`
  }

  const shorthandDateSelection = (isMonth: boolean, range: number) => {
    const theDate = new Date()
    // if isMonth is false, then it is year
    const year = theDate.getFullYear()
    const month = theDate.getMonth()
    if (isMonth) {
      const endDate = new Date(year, month)
      const startDate = new Date(year, month - (range - 1))
      setRange([startDate, endDate])
    } else {
      const endDate = new Date(year + range, 11)
      const startDate = new Date(year + range, 0)
      setRange([startDate, endDate])
    }

    setOpenCalendar(false)
    setTimeout(() => {
      setOpenCalendar(true)
    }, 10)
  }

  useEffect(() => {
    if (value) {
      setRange(value)
    }
    props.onChange(value)
  }, [value])

  const renderPopUpCalendar = () => {
    return (
      <div className="flex flex-row">
        <div className="flex flex-col gap-0">
          <Calendar
            className="kselect-range"
            locale="en-US"
            value={range}
            onChange={setRange}
            onClickMonth={() => {
              setShorthandIndex({ ...shorthandIndex, current: -1 })
            }}
            defaultValue={null}
            next2Label={null}
            prev2Label={null}
            prevLabel={<img src={LeftIcon} />}
            nextLabel={<img src={RightIcon} />}
            formatShortWeekday={formatShortWeekday}
            formatMonthYear={formatMonthYear}
            selectRange
            maxDetail="year"
          />
          <div
            className="h-19 w-[350px] bg-[#FFF] flex flex-row gap-4 py-4 justify-center border-[1px] border-[#E7E7E7] border-t-0 rounded-b-[10px]"
            style={{
              borderBottomRightRadius: "0px"
            }}
          >
            <KButton
              text="Cancel"
              height="44px"
              width="160px"
              background="#FFF"
              textColor="#111"
              onClick={() => {
                setRange(value)
                setOpenCalendar(false)
                const approvedIndex = shorthandIndex.approved
                setShorthandIndex({ ...shorthandIndex, current: approvedIndex })
              }}
            />
            <KButton
              text="Apply"
              height="44px"
              width="160px"
              background="#F2FE67"
              textColor="#111"
              onClick={() => {
                setValue(range)
                setOpenCalendar(false)
                const currentIndex = shorthandIndex.current
                setShorthandIndex({ ...shorthandIndex, approved: currentIndex })
              }}
            />
          </div>
        </div>
        <div
          className="w-[160px] bg-[#FFF] flex flex-col items-center justify-between px-2.5 pt-5 pb-4"
          style={{
            border: "1px solid #E7E7E7",
            borderLeft: "0px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px"
          }}
        >
          <KButton
            onClick={() => {
              shorthandDateSelection(true, 3)
              setShorthandIndex({ ...shorthandIndex, current: 0 })
            }}
            width="140px"
            background={shorthandIndex.current === 0 ? "#000" : "#FFF"}
            textColor={shorthandIndex.current === 0 ? "#FFF" : "#000"}
            text="Last 3 months"
            borderRadius={1}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(true, 6)
              setShorthandIndex({ ...shorthandIndex, current: 1 })
            }}
            width="140px"
            background={shorthandIndex.current === 1 ? "#000" : "#FFF"}
            textColor={shorthandIndex.current === 1 ? "#FFF" : "#000"}
            text="Last 6 months"
            borderRadius={1}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(true, 12)
              setShorthandIndex({ ...shorthandIndex, current: 2 })
            }}
            width="140px"
            background={shorthandIndex.current === 2 ? "#000" : "#FFF"}
            textColor={shorthandIndex.current === 2 ? "#FFF" : "#000"}
            text="Last 12 months"
            borderRadius={1}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(false, 0)
              setShorthandIndex({ ...shorthandIndex, current: 3 })
            }}
            width="140px"
            background={shorthandIndex.current === 3 ? "#000" : "#FFF"}
            textColor={shorthandIndex.current === 3 ? "#FFF" : "#000"}
            text="This year"
            borderRadius={1}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
          <KButton
            onClick={() => {
              shorthandDateSelection(false, -1)
              setShorthandIndex({ ...shorthandIndex, current: 4 })
            }}
            width="140px"
            background={shorthandIndex.current === 4 ? "#000" : "#FFF"}
            textColor={shorthandIndex.current === 4 ? "#FFF" : "#000"}
            text="Last year"
            borderRadius={1}
            shadowDisabled
            hoverBackground="#F0F0F0"
            height="40px"
          />
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      {openCalendar && (
        <div className="w-[100vw] h-[100vh] fixed left-0 top-0 flex items-center justify-center z-50">
          <div>{renderPopUpCalendar()}</div>
        </div>
      )}
      <div>
        <div className="flex flex-row justify-between gap-2 items-center">
          <div>
            <KButton
              icon={CalendarIcon}
              onClick={() => {
                setOpenCalendar(true)
              }}
              padding="14px"
              width="48px"
              height="48px"
              background="#F7F7F7"
              hoverBackground="#F3F3F3"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default KSelectRange