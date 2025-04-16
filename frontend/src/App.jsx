import React from 'react'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className=' text-3xl font-bold text-blue-800 '>Welcome to React News Project</h1>
      <Button className=' bg-slate-500 text-white' variant='ghost'>Click Me</Button>
    </div>
  )
}

export default App