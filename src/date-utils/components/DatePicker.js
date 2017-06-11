// @flow
import React from 'react'
import { DatePickerContainer } from '../styles'
import moment from 'moment'

const DatePickerComponent = (props: { value: Date, onChange: Function, hideMonths?: boolean, }) => {
  let month = moment(props.value).month()
  let year = moment(props.value).year()

  return (
    <DatePickerContainer>
      {
        !props.hideMonths &&
          <select value={month} onChange={e => props.onChange(moment().year(year).month(e.target.value))}>
            <option value='0'>January</option>
            <option value='1'>February</option>
            <option value='2'>March</option>
            <option value='3'>April</option>
            <option value='4'>May</option>
            <option value='5'>June</option>
            <option value='6'>July</option>
            <option value='7'>August</option>
            <option value='8'>September</option>
            <option value='9'>October</option>
            <option value='10'>November</option>
            <option value='11'>December</option>
          </select>
      }

      <select value={year} onChange={e => props.onChange(moment().year(e.target.value).month(month))}>
        <option value='2017'>2017</option>
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
        <option value='2014'>2014</option>
        <option value='2013'>2013</option>
        <option value='2012'>2012</option>
        <option value='2011'>2011</option>
        <option value='2010'>2010</option>
        <option value='2009'>2009</option>
        <option value='2008'>2008</option>
        <option value='2007'>2007</option>
        <option value='2006'>2006</option>
        <option value='2005'>2005</option>
        <option value='2004'>2004</option>
        <option value='2003'>2003</option>
        <option value='2002'>2002</option>
        <option value='2001'>2001</option>
        <option value='2000'>2000</option>
        <option value='1999'>1999</option>
        <option value='1998'>1998</option>
        <option value='1997'>1997</option>
        <option value='1996'>1996</option>
        <option value='1995'>1995</option>
        <option value='1994'>1994</option>
        <option value='1993'>1993</option>
        <option value='1992'>1992</option>
        <option value='1991'>1991</option>
        <option value='1990'>1990</option>
      </select>
    </DatePickerContainer>
  )
}

export default DatePickerComponent
