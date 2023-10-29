import { FormWrapper } from "./FormWrapper";

type InterviewData={
    jobLanguage:string
    interviewMode:string
    interviewDuration:string
}
type InterviewFormProps= InterviewData &{
  
    updateFields: (fields:Partial<InterviewData>)=>void
}
export function InterviewForm({jobLanguage,
interviewMode,
interviewDuration,updateFields}:InterviewFormProps){
    return(
      <FormWrapper title="Interview Setting">
      <label>Interview Mode</label>
      <select onChange={e=>updateFields({interviewMode : e.target.value}) } autoFocus required typeof="text" value={interviewMode}>
        <option>Online</option>
        <option>Offline</option>
      </select>
      <label>Interview Duration</label>
      <select onChange={e=>updateFields({interviewDuration: e.target.value})} required typeof="text" value={interviewDuration}>
        <option>Short</option>
        <option>Medium</option>
        <option>Long</option>
      </select>
      <label>Job Language</label>
      <select onChange={e=>updateFields({jobLanguage:e.target.value})} required typeof="text" value={jobLanguage}>
        <option>English</option>
        <option>Hindi</option>
      </select>
      </FormWrapper>
    )
}