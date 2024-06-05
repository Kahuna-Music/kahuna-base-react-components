import React, { CSSProperties, useState } from "react"
import Calendar from "react-calendar"
import "./CalendarCustom.css"
//@ts-ignore
import LeftIcon from "../../assets/chevron-left.svg"
//@ts-ignore
import RightIcon from "../../assets/chevron-right.svg"
import "../../main.css"
import KButton from "../KButton"

export interface KSelectDateProps {}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const KSelectDate: React.FC<KSelectDateProps> = (props) => {
  const [value, onChange] = useState<Value>(new Date())

  const formatShortWeekday = (locale: string | undefined, date: Date): string => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // Return only the first letter of the weekday
  }

  return (
    <div className="flex flex-col gap-0">
      <Calendar
        onChange={onChange}
        locale="en-US"
        value={value}
        next2Label={null}
        prev2Label={null}
        prevLabel={<img src={LeftIcon} />}
        nextLabel={<img src={RightIcon} />}
        formatShortWeekday={formatShortWeekday}
      />
      <div className="h-19 bg-[#FFF] flex flex-row gap-4 py-4 justify-center border-[1px] border-[#E7E7E7] border-t-0 rounded-b-[10px]">
        <KButton text="Cancel" height="44px" width="160px" background="#FFF" textColor="#111" onClick={() => {}}/>
        <KButton text="Apply" height="44px" width="160px" background="#F2FE67" textColor="#111" onClick={() => {}}/>
      </div>
    </div>
  )
}

export default KSelectDate
