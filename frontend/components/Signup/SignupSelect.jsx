import React from 'react'

const SignupSelect = ({value, onChange, type, data, style, name, handleOnFocus}) => {

  const generateYearOptions = () => {
    const arr = []
  
    const startYear = 1900
    const endYear = new Date().getFullYear()
  
    for (let i = endYear-1; i >= startYear; i--) {
      arr.push(<option key={i*100} value={i}>{i}</option>)
    }
  
    return arr
  };

  const generateMonthOptions = () => {
    const arr = []

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    for (let i = 0; i <= months.length; i++) {
      arr.push(<option key={i} value={months[i]}>{months[i]}</option>)
    }
  
    return arr
  }

  const generateDayOptions = () => {
    const arr = []
    const startDay = 1
    const endDay = 31

    for (let i = startDay; i <= endDay; i++) {
      arr.push(<option key={i*100} value={i}>{i}</option>)
    }
  
    return arr


  }

  return (
    <select
      className={`${style} rounded-md focus:outline-none py-1 px-2`}
      value={value}
      onChange={onChange}
      name={name}
      onFocus={(e) => handleOnFocus(e, name)}
    >
      <option value={value}>{value}</option>
        {type==='year'? generateYearOptions() : type==='month'? generateMonthOptions() : type==='day' ? generateDayOptions() : data}
    </select>
  )
}

export default SignupSelect