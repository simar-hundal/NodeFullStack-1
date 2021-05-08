import { useState, useEffect } from 'react'

function Home() {
  const [items, setItems] = useState([])

  // API
  const api =
    'https://newsapi.org/v2/everything?q=tesla&from=2021-04-08&sortBy=publishedAt&apiKey=5beca349748649428cef95ea152e631c'

  useEffect(() => {
    fetchItems()
  }, []) //->

  const fetchItems = async () => {
    const result = await fetch(api)
    const jsonResult = await result.json()
    console.log(jsonResult.articles)
    setItems(jsonResult.articles)
    console.log(jsonResult.articles)
    console.log(items)
  }

  //articles
  return (
    <div className='App'>
      <div> Home</div>

      <div>
        {items.map((r, id) => (
          <ul>
            <li key={id}> {r.title}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Home
