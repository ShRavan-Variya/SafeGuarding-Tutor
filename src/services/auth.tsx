import {API} from '../api/api';

export async function loginApi(data: any) {
  const res = await API.post('Account/login', data);
  return res.data;
}
