import { baseApi } from '@/utils/axios';

const api = `/jenis`;

const listJenis = () => baseApi.get(`${api}`);
const addJenis = (body) => baseApi.post(`${api}`, body);
const editJenis = (options, body) => baseApi.put(`${api}/${options.id_jenis}`, body);
const delJenis = (options) => baseApi.delete(`${api}/${options.id_jenis}`);

export { listJenis, addJenis, editJenis, delJenis };