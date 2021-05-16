import React, { useState } from 'react'

export default function MailGunCompoenet() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const mailgun = require('mailgun-js')
  //const DOMAIN = "309a201a929ec35b5d073ab1294ca1a8-602cc1bf-cd18fc46";
  const mg = mailgun({
    apiKey: '309a201a929ec35b5d073ab1294ca1a8-602cc1bf-cd18fc46',
    domain: 'sandboxdd54c1e250304213831e0df577224269.mailgun.org',
  })
  const data = {
    from: 'Your Custom name User <me@samples.mailgun.org>',
    to: 'ladijayshree7@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!',
  }

  const handleInputChange = (e) => {
    let nameSwitch = e.target.name
    e.preventDefault()
    switch (nameSwitch) {
      case 'from': {
        setFrom(e.target.value)
        data.from = e.target.value
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
  const onFormsubmit = (e) => {
    console.log(body)
    try {
      mg.messages().send(body, function (error, body) {
        console.log(body)
        console.log(error)
      })
    } catch (error) {
      console.log()
    }
  }
  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> From Email - {from}</p>
      <p>Subject - {subject}</p>
      <p>To - {to}</p>
      <p>Body - {body}</p>
      <form onSubmit={onFormsubmit} action='#'>
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
        <button>Save Data</button>
      </form>
    </div>
  )
}
