import { FormWrapper } from "./FormWrapper";

type  RequisitionFormData={
    rTitle:string 
    urgency:string 
    numberOfOpenings: string
    gender: string
}
type  RequisitionFormProps= RequisitionFormData &{
    updateFields: (fields:Partial<RequisitionFormData>)=>void

   
}

export function RequisitionForm({rTitle,urgency,numberOfOpenings,gender,updateFields}:  RequisitionFormProps){
    return(
        <FormWrapper title="Requisition Details">
        <label>Requisition Title</label>
        <input onChange={e=>updateFields({rTitle:e.target.value})} autoFocus required type="text" value={rTitle}/>
        <label>Number Of Openings</label>
        <input  onChange={e=>updateFields({numberOfOpenings:e.target.value})} required type="number" value={numberOfOpenings}></input>
        <label>Gender</label>
      <select  onChange={e=>updateFields({gender:e.target.value})} value={gender} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Female</option>
      </select>
        <label>Urgency</label>
        <select  onChange={e=>updateFields({urgency:e.target.value})}  value={urgency}required >
        <option value="">Select Urgency</option>
        <option value="male">Immediate Joiner</option>
        <option value="female">Relaxed</option>
        <option value="other">Urgent</option>
      </select>
        </FormWrapper>
    )
}