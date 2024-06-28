import {API} from '../api/api';

export async function get_students_for_tutor() {
  const res = await API.get('TutorApp/get-students');
  return res.data;
}

export async function get_Past_Lesson() {
  const res = await API.get('TutorApp/get-past-lesson-of-students');
  return res.data.data;
}

export async function get_Current_Lesson() {
  const res = await API.get(`TutorApp/get-current-lesson`);
  return res.data.data;
}

export async function get_Upcoming_Lesson() {
  const res = await API.get('TutorApp/get-upcoming-lesson-of-students');
  return res.data.data;
}

export async function get_this_week_calender(date: any) {
  const res = await API.get(`TutorApp/get-this-week-calender?dateTime=${date}`);
  return res.data.data;
}
