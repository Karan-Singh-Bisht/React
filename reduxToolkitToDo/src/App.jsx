import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className='w-full h-screen bg-gray-400'>
        <div className='max-w-screen-xl mx-auto p-4 '>
            <Addtodo/>
            <Todos/>
        </div>
    </div>
  )
}

export default App