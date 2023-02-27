import { baseApi } from "@/utils/axios";

const api = `/gambar`;

const getImg = (options) =>
  baseApi.get(`${api}/${options.id_gambar}`, {
    responseType: "arraybuffer",
  });

const addImg = (body) =>
  baseApi.post(`${api}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export { getImg, addImg };
