import { defineStore } from 'pinia';
import * as s$jenis from '@/services/jenis';

const d$jenis = defineStore({
    id: 'jenis',
    state: () => ({
      listJenis: [],
      status: null,
    }),
    actions: {
      async a$listJenis() {
        try {
            const { data, status } = await s$jenis.listJenis();
            this.listJenis = data ?? [];
            this.status = status;
        } catch ({error, message}) {
            this.status = false;
            throw error ?? message;
        }
      },
    },
    getters: {
      g$listJenis: ({ listJenis }) => (listJenis),
    },
  });
  
  export default d$jenis;