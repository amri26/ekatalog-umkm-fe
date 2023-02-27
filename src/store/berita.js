import { defineStore } from "pinia";
import * as s$berita from "@/services/berita";

const d$berita = defineStore({
  id: "berita",
  state: () => ({
    listBerita: [],
    getBerita: {},
    status: null,
  }),
  actions: {
    async a$listBerita() {
      try {
        const { data, status } = await s$berita.listBerita();
        this.listBerita = data ?? [];
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
    async a$getBerita(options) {
      try {
        const { data, status } = await s$berita.getBerita(options);
        this.getBerita = data ?? {};
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
    async a$addBerita(body) {
      try {
        const { status } = await s$berita.addBerita(body);
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
  },
  getters: {
    g$listBerita: ({ listBerita }) => listBerita,
    g$getBerita: ({ getBerita }) => getBerita,
  },
});

export default d$berita;
