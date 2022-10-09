import {useState} from 'react'

const Home = () => {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>Home</h1>
      <h2>Number: {num}</h2>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}

export default Home
