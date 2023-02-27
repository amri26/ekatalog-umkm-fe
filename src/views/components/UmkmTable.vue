<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex align-items-center">
        <h6 class="mb-0">Tabel UMKM</h6>
        <argon-button @click="addUmkm()" color="primary" size="sm" class="ms-auto">Tambah Baru</argon-button>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Usaha</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nama Pemilik</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No. HP</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in g$listUmkm">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="pe-4 text-sm">{{ index+1 }}.</div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.nama_usaha }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ item.jenis.nama }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ item.orang.nama_lengkap }}</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ item.orang.no_hp }}</span>
              </td>
              <td class="align-middle">
                <argon-button @click="getUmkm(item.id_usaha)" color="info" size="sm">Detail</argon-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import ArgonButton from "@/components/ArgonButton.vue";
import d$umkm from '@/store/umkm';

export default {
  name: "umkm-table",
  computed: {
    ...mapState(d$umkm, ['g$listUmkm'])
  },
  methods: {
    ...mapActions(d$umkm, ['a$listUmkm']),

    async getUmkm(id_usaha) {
      try {
        this.$router.push({ name: 'Detail Umkm', params: { id_usaha }})
      } catch (error) {
        console.log(error)
      }
    },

    async addUmkm() {
      try {
        this.$router.push({ name: 'Add Umkm' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    try {
      await this.a$listUmkm()
    } catch (error) {
      throw error
    }
  },
  components: {
    ArgonButton,
  },
};
</script>
