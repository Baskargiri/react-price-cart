import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
export default function App() {
  return (
    <Price />
  )
}

function Price(){
 const data=[
  {
    plan:"FREE",
    price:"$0",
    user:"✔️ Single User",
    storage:"✔️ 5GB Storage",
    public:"✔️ Unlimited public project",
    access:"✔️ Community Access",
    project:"❌ Unlimited private project",
    support:"❌ Dedicated phone support",
    domain:"❌ Free subdomain",
    report:"❌ Monthly status report"
  },
  {
    plan:"PLUS",
    price:"$9",
    user:"✔️ 5 User",
    storage:"✔️ 50GB Storage",
    public:"✔️ Unlimited public project",
    access:"✔️ Community Access",
    project:"✔️ Unlimited private project",
    support:"✔️ Dedicated phone support",
    domain:"✔️ Free subdomain",
    report:"❌ Monthly status report"
  },
  {
    plan:"PRO",
    price:"$49",
    user:"✔️ Unlimited User",
    storage:"✔️ 150GB Storage",
    public:"✔️ Unlimited public project",
    access:"✔️ Community Access",
    project:"✔️ Unlimited private project",
    support:"✔️ Dedicated phone support",
    domain:"✔️ Unlimited Free subdomain",
    report:"✔️ Monthly status report"
  }
 ]
  return(
    
    <div className='table'> 
    {data.map((e)=>
    <Price_table prop={e} />)}
    </div>
  )
}

function Price_table({prop}){
  return(
    <div className='card'>
      <div className='head'>
        <p>{prop.plan}</p>
        <p className='priceing'>{prop.price}<span>/month</span></p>
      </div>
      <div className='body'>
        <p>{prop.user}</p>
        <p>{prop.storage}</p>
        <p>{prop.public}</p>
        <p>{prop.access}</p>
        <p>{prop.project}</p>
        <p>{prop.support}</p>
        <p>{prop.domain}</p>
        <p>{prop.report}</p>
        <button className='btn'>BUTTON</button>
      </div>
    </div>
  )
}