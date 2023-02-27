import { baseApi } from '@/utils/axios';

const api = `/umkm`;

const listUmkm = () => baseApi.get(`${api}`);
const getUmkm = (options) => baseApi.get(`${api}/${options.id_usaha}`);
const addUmkm = (body) => baseApi.post(`${api}`, body);
const editUmkm = (options, body) => baseApi.put(`${api}/${options.id_usaha}`, body);
const delUmkm = (options) => baseApi.delete(`${api}/${options.id_usaha}`);

export { listUmkm, getUmkm, addUmkm, editUmkm, delUmkm };