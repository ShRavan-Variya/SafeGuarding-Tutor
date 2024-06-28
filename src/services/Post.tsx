import { API } from "../api/api";

export async function Add_SOS(lessonId: any) {
    const res = await API.post(`TutorApp/add-SOS/${lessonId}`);
    return res.data.data;
}

export async function Student_Arrived(lessonId: any) {
    const res = await API.post(`TutorApp/add-student-arrived-time/${lessonId}`);
    return res.data.data;
}

export async function Tutor_Arrived(lessonId: any) {
    const res = await API.post(`TutorApp/add-tutor-arrived-time/${lessonId}`);
    return res.data.data;
}