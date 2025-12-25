import React, { useState } from 'react'

const App = () => {
  // Object State
  const [name, setName] = useState({ fristName: 'Vishal', lastName: 'chavda'})

  const handleChange=()=>{
    setName({...name , fristName:'Vishu' , lastName:'0603'})
  }

  const handleReset=()=>{
    setName({fristName:'Vishal' , lastName:'chavda'})
  }

  // Array State
  const [numbers , setNumbers]= useState([2010 , 2020 , 2030 , 2040 , 2050])

  const handelAddNumber=()=>{
    setNumbers([...numbers , 2060])
  }
  const handelRemoveNumber=()=>{
    setNumbers(numbers.slice(0 , -1))
  }

  // Functional Updates (Using Previous State)
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementByFive = () => {
    setCount(prevCount => prevCount + 5)
  }

  // Lazy Initialization
  const [expensiveValue, setExpensiveValue] = useState(() => {
    console.log('Initializing expensive value...')
    return 100 * 50 // Expensive calculation
  })

  const resetExpensive = () => {
    setExpensiveValue(() => 100 * 50)
  }

  // Nested Object State
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    },
    hobbies: ['reading', 'coding']
  })

  const updateStreet = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        street: '456 Oak Ave'
      }
    })
  }

  const addHobby = () => {
    setUser({
      ...user,
      hobbies: [...user.hobbies, 'gaming']
    })
  }

  // Array Operations - Update Specific Item
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', completed: false },
    { id: 2, name: 'Item 2', completed: false },
    { id: 3, name: 'Item 3', completed: true }
  ])

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    setItems([...items, { id: newId, name: `Item ${newId}`, completed: false }])
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  // Multiple State Updates
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: ''
    })
  }

  // Conditional State Updates
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)

  const increaseScore = () => {
    setScore(prevScore => {
      const newScore = prevScore + 10
      // Update level when score reaches threshold
      if (newScore >= level * 100) {
        setLevel(prevLevel => prevLevel + 1)
      }
      return newScore
    })
  }

  return (
    <div className='p-8 space-y-8'>
      <h1 className='text-4xl font-bold mb-8'>UseState Advance Info</h1>

      {/* Object State */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Object State</h2>
        <h3 className='mb-4'>Name: {name.fristName} {name.lastName}</h3>
        <button className='bg-blue-500 text-white p-2 rounded-md mr-2' onClick={handleChange}>Change Value</button>
        <button className='bg-gray-500 text-white p-2 rounded-md' onClick={handleReset}>Reset Value</button>
      </div>

      {/* Array State */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Array State</h2>
        <h3 className='mb-4'>Years list</h3>
        <ul className='list-disc ml-6 mb-4'>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <button className='bg-green-500 text-white p-2 rounded-md mr-2' onClick={handelAddNumber}>Add Number +</button>
        <button className='bg-red-500 text-white p-2 rounded-md' onClick={handelRemoveNumber}>Remove Number -</button>
      </div>

      {/* Functional Updates */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Functional Updates (Using Previous State)</h2>
        <h3 className='text-3xl font-bold mb-4'>Count: {count}</h3>
        <button className='bg-blue-500 text-white p-2 rounded-md mr-2' onClick={increment}>Increment +</button>
        <button className='bg-red-500 text-white p-2 rounded-md mr-2' onClick={decrement}>Decrement -</button>
        <button className='bg-purple-500 text-white p-2 rounded-md' onClick={incrementByFive}>Increment by 5</button>
      </div>

      {/* Lazy Initialization */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Lazy Initialization</h2>
        <h3 className='mb-4'>Expensive Value: {expensiveValue}</h3>
        <button className='bg-yellow-500 text-white p-2 rounded-md' onClick={resetExpensive}>Reset Expensive Value</button>
      </div>

      {/* Nested Object State */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Nested Object State</h2>
        <div className='mb-4'>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.country}</p>
          <p><strong>Hobbies:</strong> {user.hobbies.join(', ')}</p>
        </div>
        <button className='bg-indigo-500 text-white p-2 rounded-md mr-2' onClick={updateStreet}>Update Street</button>
        <button className='bg-pink-500 text-white p-2 rounded-md' onClick={addHobby}>Add Hobby</button>
      </div>

      {/* Array Operations - Update Specific Item */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Array Operations - Update Specific Item</h2>
        <ul className='mb-4 space-y-2'>
          {items.map(item => (
            <li key={item.id} className='flex items-center gap-4'>
              <span className={item.completed ? 'line-through text-gray-500' : ''}>
                {item.name} - {item.completed ? 'Completed' : 'Pending'}
              </span>
              <button className='bg-blue-500 text-white px-3 py-1 rounded text-sm' onClick={() => toggleItem(item.id)}>
                Toggle
              </button>
              <button className='bg-red-500 text-white px-3 py-1 rounded text-sm' onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button className='bg-green-500 text-white p-2 rounded-md' onClick={addItem}>Add New Item</button>
      </div>

      {/* Multiple State Updates - Form */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Multiple State Updates - Form</h2>
        <div className='space-y-4 mb-4'>
          <div>
            <label className='block mb-2'>Username:</label>
            <input 
              type="text" 
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className='border-2 border-gray-300 rounded-md p-2 w-full'
              placeholder='Enter username'
            />
          </div>
          <div>
            <label className='block mb-2'>Email:</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='border-2 border-gray-300 rounded-md p-2 w-full'
              placeholder='Enter email'
            />
          </div>
          <div>
            <label className='block mb-2'>Password:</label>
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className='border-2 border-gray-300 rounded-md p-2 w-full'
              placeholder='Enter password'
            />
          </div>
        </div>
        <div className='mb-4 p-4 bg-gray-100 rounded'>
          <p><strong>Form Data:</strong> {JSON.stringify(formData, null, 2)}</p>
        </div>
        <button className='bg-gray-500 text-white p-2 rounded-md' onClick={resetForm}>Reset Form</button>
      </div>

      {/* Conditional State Updates */}
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Conditional State Updates</h2>
        <div className='mb-4'>
          <p className='text-xl'><strong>Score:</strong> {score}</p>
          <p className='text-xl'><strong>Level:</strong> {level}</p>
          <p className='text-sm text-gray-600 mt-2'>Level up when score reaches {level * 100}</p>
        </div>
        <button className='bg-orange-500 text-white p-2 rounded-md' onClick={increaseScore}>Increase Score (+10)</button>
      </div>
    </div>
  )
}

export default App