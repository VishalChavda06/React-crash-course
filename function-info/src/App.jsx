import React from 'react'

const App = () => {

  const handleClick = () => {
    console.log('button clicked...');
  }

  const handelChange = (elem) => {
    console.log(elem.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  }

  const handleFocus = () => {
    console.log('Input field focused');
  }

  const handleBlur = () => {
    console.log('Input field lost focus');
  }

  const handleMouseEnter = () => {
    console.log('Mouse entered the element');
  }

  const handleMouseLeave = () => {
    console.log('Mouse left the element');
  }

  const handleDoubleClick = () => {
    console.log('Double clicked!');
  }

  const handleKeyDown = (e) => {
    console.log('Key pressed:', e.key);
  }

  const handleKeyUp = (e) => {
    console.log('Key released:', e.key);
  }

  const handleCopy = () => {
    console.log('Text copied!');
  }

  const handlePaste = () => {
    console.log('Text pasted!');
  }

  return (
    <>
      <div className='m-12'>
        <h4>Button onClick Event</h4>
        {/* Button onClick Event */}
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>Click Here !!!</button>
        <button className='bg-red-500 text-white p-2 rounded-md ms-2' onClick={() => console.log('Second button Clicked...')} >Please Click Here !!!</button>
      </div>

      <div className='m-12'>
        {/* onChange Event */}
        <h4>onChange Event</h4>
        <input type="text" placeholder='Enter Your Name' className='border-2 border-gray-300 rounded-md p-2' onChange={handelChange} />
      </div>

      <div className='m-12'>
        {/* onSubmit Event */}
        <h4>onSubmit Event</h4>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input type="text" placeholder='Enter Email' className='border-2 border-gray-300 rounded-md p-2' />
          <button type="submit" className='bg-green-500 text-white p-2 rounded-md'>Submit</button>
        </form>
      </div>

      <div className='m-12'>
        {/* onFocus & onBlur Events */}
        <h4>onFocus & onBlur Events</h4>
        <input 
          type="text" 
          placeholder='Focus and Blur here' 
          className='border-2 border-gray-300 rounded-md p-2' 
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div className='m-12'>
        {/* onMouseEnter & onMouseLeave Events */}
        <h4>onMouseEnter & onMouseLeave Events</h4>
        <div 
          className='bg-purple-500 text-white p-4 rounded-md inline-block cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover over me!
        </div>
      </div>

      <div className='m-12'>
        {/* onDoubleClick Event */}
        <h4>onDoubleClick Event</h4>
        <button 
          className='bg-orange-500 text-white p-2 rounded-md' 
          onDoubleClick={handleDoubleClick}
        >
          Double Click Me!
        </button>
      </div>

      <div className='m-12'>
        {/* onKeyDown & onKeyUp Events */}
        <h4>onKeyDown & onKeyUp Events</h4>
        <input 
          type="text" 
          placeholder='Press any key' 
          className='border-2 border-gray-300 rounded-md p-2' 
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
      </div>

      <div className='m-12'>
        {/* onCopy & onPaste Events */}
        <h4>onCopy & onPaste Events</h4>
        <input 
          type="text" 
          placeholder='Copy or paste text here' 
          className='border-2 border-gray-300 rounded-md p-2' 
          onCopy={handleCopy}
          onPaste={handlePaste}
          defaultValue="Try to copy this text"
        />
      </div>
    </>
  )
}

export default App