<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex align-items-center">
        <h6 class="mb-0">Bidang Usaha</h6>
        <argon-button @click="addJenis()" color="primary" size="sm" class="ms-auto">Tambah Baru</argon-button>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in g$listJenis">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.nama }}</h6>
                  </div>
                </div>
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
import d$jenis from '@/store/jenis';

export default {
  name: "jenis-table",
  computed: {
    ...mapState(d$jenis, ['g$listJenis'])
  },
  methods: {
    ...mapActions(d$jenis, ['a$listJenis']),

    // async getUmkm(id_usaha) {
    //   try {
    //     this.$router.push({ name: 'Detail Umkm', params: { id_usaha }})
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    // async addJenis() {
    //   try {
    //     this.$router.push({ name: 'Add Umkm' })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  async mounted() {
    try {
      await this.a$listJenis()
    } catch (error) {
      throw error
    }
  },
  components: {
    ArgonButton,
  },
};
</script>
