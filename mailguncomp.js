import axios from 'axios'
import React, { useState } from 'react'

export default function MyApp() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [result, setResult] = useState('')

  //const DOMAIN = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const mg = {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    domain: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.mailgun.org',
  }

  const data = {
    from: 'test@' + mg.domain,
    to: 'bond.deejay@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!',
  }
  const handleInputChange = (e) => {
    let nameSwitch = e.target.name
    switch (nameSwitch) {
      case 'from': {
        setFrom(e.target.value)
        //  data.from = e.target.value;
        break
      }

      case 'to': {
        setTo(e.target.value)
        data.to = e.target.value
        break
      }
      case 'subject': {
        setSubject(e.target.value)
        data.subject = e.target.value
        break
      }
      case 'body': {
        setBody(e.target.value)
        data.text = e.target.value
        break
      }
      default: {
        break
      }
    }
  }
  function requestObject(url, method, params) {
    let configObject = {
      url: url,
      method: method,
      params: params,
      auth: {
        username: 'api',
        password: 'xxxxxxxxxxxxxxxxxxxxxx-xxxxxxxx-xxxxxxxx',
      },
    }
    return configObject
  }
  async function onFormsubmit(e) {
    console.log(data)
    console.log(requestObject())
    let configObejct = requestObject(
      'https://api.mailgun.net/v3/sandboxxxxxxxxxxxxx-xxxxxxxx-xxxxxxxx.mailgun.org/messages',
      'post',
      data
    )
    axios.request(configObejct).then((res) => {
      console.log('react1: ', res)
      console.log('react2: ', res.data)
      setResult(res.data.message)
    })
  }

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> From Email - {from}</p>
      <p>Subject - {subject}</p>
      <p>To - {to}</p>
      <p>Body - {body}</p>
      <form>
        <input
          onChange={handleInputChange}
          placeholder='FRom Email Address'
          name='from'
        />
        <br />
        <input
          onChange={handleInputChange}
          placeholder='To Email Address'
          name='to'
        />
        <br />
        <input
          onChange={handleInputChange}
          placeholder='Subject'
          name='subject'
        />
        <br />
        <input onChange={handleInputChange} placeholder='body' name='body' />
        <br />
      </form>
      <button onClick={onFormsubmit}>Save Data</button>
      {result}
    </div>
  )
}
