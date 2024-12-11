import React, { useEffect, useState, KeyboardEvent, useRef } from "react"
import "../../main.css"
import KDropdown, { KDropdownProps, KSelectOption } from "../KDropdown/KDropdown"
import KSpan from "../KSpan"
//@ts-ignore
import CloseIcon from "../../assets/close.svg"
// @ts-ignore
import CheckIcon from "../../assets/check.svg"



const KSearchSelect: React.FC<KDropdownProps> = (props) => {
 const [options, setOptions] =  useState<KSelectOption[]>([])
 
  return (
    <KDropdown {...props} options={options} />
  )
}

export default KSearchSelect
