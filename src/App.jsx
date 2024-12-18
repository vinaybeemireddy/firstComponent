import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  const handleClickMe=()=>{
    console.log("clicked me")
  }

  const handleCartButton=()=>{
    alert("clicked on cart")
  }

  const handlePaymentButton=()=>{
    console.log("clicked on payment button")
  }

  const handleLoginButton=()=>{
    alert("clicked on login button")
  }
  return (
      <div>
       
    <MyButton buttonText="click me!" bgColor="pink" clickMe={handleClickMe}/>
    <MyButton buttonText="cart" bgColor="blue" clickMe={handleCartButton} />
    <MyButton buttonText="payment" bgColor="green" clickMe={handlePaymentButton}/>
    <MyButton buttonText="login" bgColor="red" clickMe={handleLoginButton}/>
      </div>
    
    
  )
}

export default App
