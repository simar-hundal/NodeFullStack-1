import logo from './logo.svg'
import './App.css'
import { ToggleButton } from './Components/ToggleButton'
import { useState } from 'react'
import { StudentList } from './Components/StudentList'
function App() {
  const [selected, setSelected] = useState(false)

  let students = [
    'Radhey Shyam',
    'Raman',
    'Shubham',
    'Rajesh',
    'dadsa',
    'Ramanand',
    'Rambabu',
  ]

  // if we use useState hook we will get an array of 2 size
  //0 will contain the state data

  // <ToggleButton
  //       selected={selected}
  //       toggleSelected={() => {
  //         setSelected(!selected)
  //       }}
  //     ></ToggleButton>
  return (
    <div className='App'>
      <StudentList students={students}></StudentList>
    </div>
  )
}

export default App
