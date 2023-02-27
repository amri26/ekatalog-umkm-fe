import { defineStore } from "pinia";
import * as s$umkm from "@/services/umkm";

const d$umkm = defineStore({
  id: "umkm",
  state: () => ({
    listUmkm: [],
    getUmkm: {},
    status: null,
  }),
  actions: {
    async a$listUmkm() {
      try {
        const { data, status } = await s$umkm.listUmkm();
        this.listUmkm = data ?? [];
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
    async a$getUmkm(options) {
      try {
        const { data, status } = await s$umkm.getUmkm(options);
        this.getUmkm = data ?? {};
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
    async a$addUmkm(body) {
      try {
        const { status } = await s$umkm.addUmkm(body);
        this.status = status;
      } catch ({ error, message }) {
        this.status = false;
        throw error ?? message;
      }
    },
  },
  getters: {
    g$listUmkm: ({ listUmkm }) => listUmkm,
    g$getUmkm: ({ getUmkm }) => getUmkm,
  },
});

export default d$umkm;
