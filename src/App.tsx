import { FormEvent, useEffect, useState } from "react"
import { InterviewForm } from "./InterviewForm"
import { JobDetailForm } from "./JobDetailForm"
import { RequisitionForm } from "./RequisitionForm"
import { useMultistepForm } from "./useMultistepForm"
import './style.css'
type FormData={
  rTitle: string
  numberOfOpenings: number
  gender: string
  urgency: string
  jobDetail: string
  jobTitle:string
  jobLanguage:string
  interviewMode:string 
   interviewDuration:string
  location:string
}
const INITIAL_DATA: FormData={
 rTitle:"",
 numberOfOpenings:"",
 gender:"",
 urgency:"",
 jobDetail:"",
 jobTitle:"",
 jobLanguage:"",
 interviewMode:"",
 interviewDuration:"",
 location:"",

}
function App(){
 const[data,setData]=useState(INITIAL_DATA)
 function updateFields(fields: Partial<FormData>){
  setData(prev=>{
    return{...prev, ...fields}
  })
 }
 const{step,steps, currentStepIndex, isFirstStep,back,next, isLastStep}=
  useMultistepForm([
    <RequisitionForm {...data} updateFields={updateFields}/>,
    <JobDetailForm {...data} updateFields={updateFields}/>,
    <InterviewForm {...data} updateFields={updateFields}/>, 
  ])
  function onSubmit(e : FormEvent){
    e.preventDefault()
    next()
   }

   
  return(
    <>
    <div style={{
      position:"relative",
      background:"white",
      border:"1px solid black",
      padding:"2rem",
      margin:"1rem",
      borderRadius:".5rem",
      fontFamily:"Ariel",
    }}>

      <form onSubmit={onSubmit}>
       
        <div style={{position:"absolute", top:".5rem", right:".5rem"}}>{currentStepIndex+1}/{steps.length}</div>
        {step}
        <div style={{
          marginTop:"1rem",
          display:"flex",
          gap:".5rem",
          justifyContent:"flex-end",
        }}>

          {!isFirstStep && ( <button type="button" onClick={back}>Back</button>)}
          
          <button type="submit" >{isLastStep? "Finish" : "Next"}</button>

         
          
        </div>
      </form>
    </div>
    <div className="details">
      <h1>Draft</h1>
        <div className="heading">
        <input onChange={()=>console.log('')} className="title" value={data.rTitle} placeholder=""></input>
        <input onChange={()=>console.log('')} className="openings" value={`OPENINGS - ${data.numberOfOpenings}`}></input>
        </div>
        <div className="requisitionDetails">
          <h2>Requisition Details</h2>
          <input onChange={()=>console.log('')} value={`Urgency -  ${data.urgency}`}></input>
          <input onChange={()=>console.log('')} value={`Gender -  ${data.gender}`}></input>
        </div>
        <div className="JobDetail">
          <h2>Job Detail</h2>
          <input onChange={()=>console.log('')} value={`Job Title -  ${data.jobTitle}`}></input>
          <input onChange={()=>console.log('')} value={`Job Details -  ${data.jobDetail}`}></input>
          <input onChange={()=>console.log('')} value={`Job Location -  ${data.location}`}></input>

        </div>
        <div className="InterviewSettings">
          <h2>Interview Setting</h2>
        <input onChange={()=>console.log('')} value={`Interview Duration -  ${data.interviewDuration}`}></input>
        <input onChange={()=>console.log('')} value={`Interview Language -  ${data.jobLanguage}`}></input>
        <input onChange={()=>console.log('')} value={`Intreview Mode -  ${data.interviewMode}`}></input>

        </div>
    </div>
    </>
  )
}

export default App