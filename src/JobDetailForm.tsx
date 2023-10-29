import { FormWrapper } from "./FormWrapper";

type JobDetailData={
    jobDetail:string
    jobTitle:string 
    location:string
}
type JobDetailFormProps= JobDetailData&{
   updateFields: (fields:Partial<JobDetailData>)=>void
}

export function JobDetailForm({jobDetail,jobTitle,location,updateFields}:JobDetailFormProps){
    return(
        <FormWrapper title="Job Details">
      <label>Job Title</label>
      <input onChange={e=>updateFields({jobTitle:e.target.value })} autoFocus required type="text" value={jobTitle}></input>
      <label>Job Details</label>
      <input  onChange={e=>updateFields({jobDetail:e.target.value})} required type="text" value={jobDetail}></input>
      <label>Job Location</label>
      <input  onChange={e=>updateFields({location:e.target.value})} required type="text" value={location}></input>
</FormWrapper>
    )
}