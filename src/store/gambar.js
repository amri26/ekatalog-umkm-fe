import { defineStore } from "pinia";
import * as s$img from "@/services/gambar";

const d$img = defineStore({
  id: "gambar",
  state: () => ({
    gambar: [],
    dataImg: {},
  }),
  actions: {
    async a$getImg(options) {
      try {
        this.gambar = await s$img.getImg(options);
      } catch ({ error, message }) {
        this.gambar = [];
        throw error ?? message;
      }
    },

    async a$addImg(body) {
      try {
        const { data } = await s$img.addImg(body);
        this.dataImg = data ?? {};
      } catch ({ error, message }) {
        throw error ?? message;
      }
    },
  },
  getters: {
    g$getImg: ({ gambar }) => gambar,
    g$addImg: ({ dataImg }) => dataImg,
  },
});

export default d$img;
