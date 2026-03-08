import { commonAPI } from "./commonAPI";
import { serverURL  } from "./serverURL";

//add
export const addStudentAPI =async(studentData)=>{
    return await commonAPI("POST",`${serverURL}/add-student`,studentData)
}
//get
export const getStudentsAPI =async()=>{
    return await commonAPI("GET",`${serverURL}/get-student`,"")
}
//edit
export const editStudentAPI =async(id,studentData)=>{
    return await commonAPI("PUT",`${serverURL}/student/${id}/edit`,studentData)
}
//delete
export const deleteStudentAPI =async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/student/${id}/delete`,"")
}