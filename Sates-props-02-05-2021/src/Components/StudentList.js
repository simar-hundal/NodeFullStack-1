import { useState } from 'react'

export function StudentList({ students }) {
  const [shouldSort, setShouldSort] = useState(false)
  const [filter, setFilter] = useState('')

  const onSortClicked = () => {
    setShouldSort(true)
  }

  const onFilterClicked = () => {
    setFilter('Ram')
  }

  const onResetClicked = () => {
    setShouldSort(false)
    setFilter('')
  }
  let toDisplayStudents = students

  if (shouldSort) {
    toDisplayStudents = toDisplayStudents.slice().sort()
  }

  if (filter) {
    toDisplayStudents = toDisplayStudents.filter((name) =>
      name.startsWith(filter)
    )
  }

  const listOfStudents = toDisplayStudents.map((student) => <li>{student}</li>)

  return (
    <div>
      <div>
        <button onClick={onSortClicked}> Sort</button>
        <button onClick={onFilterClicked}> Filter (Ram)</button>
        <button onClick={onResetClicked}> Reset</button>
      </div>
      <ul>{listOfStudents}</ul>
    </div>
  )
}
