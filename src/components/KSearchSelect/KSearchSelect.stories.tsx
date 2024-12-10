import { Meta, StoryFn } from "@storybook/react"
import KSearchSelect, { KSearchSelectProps } from "./KSearchSelect"
// @ts-ignore
import { KeyboardEvent, useState } from "react"
import { KSelectOption } from "../KDropdown/KDropdown"
//@ts-ignore
import SearchIcon from "../../assets/search.svg"
import KSpan from "../KSpan"

export default {
  title: "ReactComponentLibrary/KSearchSelect",
  component: KSearchSelect,
  parameters: {
    layout: "centered"
  }
} as Meta<typeof KSearchSelect>

const KSearchSelectWrapper: React.FC<KSearchSelectProps> = (args) => {
  //const [textValue, setTextValue] = useState<string>("")
  const [options, setOptions] = useState<KSelectOption[]>([])

  const filterOptions = (filterValue: string) => {
    if (!filterValue) {
      setOptions([])
      return
    }
    const filteredOptions = myOptions.filter((option) => option.label.toLowerCase().includes(filterValue.toLowerCase()))
    console.log("filter value: ", filterValue)
    console.log("filtered options: ", filteredOptions)
    console.log("myOptions: ", myOptions)
    setOptions(filteredOptions)
  }

  const myOptions = [
    { label: "Adem 1", value: 1, icon: SearchIcon },
    { label: "Aydın 2 ", value: 2 },
    { label: "Emre 3", value: 3 },
    { label: "Evren 4", value: 4, icon: SearchIcon },
    { label: "Burak 5 ", value: 5 },
    { label: "Tufan 6", value: 6 },
    { label: "Fatih 7", value: 7, icon: SearchIcon },
    { label: "Mustafa 8 ", value: 8 },
    { label: "Orhan 9", value: 9 },
    { label: "Ali 10", value: 10, icon: SearchIcon },
    { label: "Veli 11 ", value: 11 },
    { label: "Cenk 12", value: 12 }
  ]
  const [selected, setSelected] = useState<KSelectOption>(myOptions[1])

  const handleChange = (text: string) => {
    //setTextValue(text)
    filterOptions(text)
  }

  const handleSelect = (option: KSelectOption) => {
    //setTextValue(option.label)
    setSelected(option)
  }

  return (
    <div className="flex flex-col gap-2">
      <KSearchSelect
        {...args}
        selectedOption={selected}
        onChange={handleChange}
        options={options}
        onSelect={handleSelect}
        leftIcon={SearchIcon}
        width={200}
      />
      <div>
        <KSpan text="DENEME" />
      </div>
    </div>
  )
}

const Template: StoryFn<typeof KSearchSelectWrapper> = (args) => <KSearchSelectWrapper {...args} />

export const KSearchSelectPrimary = Template.bind({})
KSearchSelectPrimary.args = {
  onKeyDown: (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("Enter is clicked and our value is:", event.currentTarget)
    }
  },
  placeholder: "Placeholder..."
}
