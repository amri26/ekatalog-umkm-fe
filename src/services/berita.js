import { baseApi } from "@/utils/axios";

const api = `/berita`;

const listBerita = () => baseApi.get(`${api}`);
const getBerita = (options) => baseApi.get(`${api}/${options.id_berita}`);
const addBerita = (body) => baseApi.post(`${api}`, body);

export { listBerita, getBerita, addBerita };
