<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="card">
        <div class="card-header pb-0">
          <div class="d-flex align-items-center">
            <h6 class="mb-0">Promosi UMKM Kec. Giritontro</h6>
            <argon-button @click="addBerita()" color="primary" size="sm" class="ms-auto">Tambah Baru</argon-button>
          </div>
        </div>
        <div class="card-body pt-4 p-3">
          <ul class="list-group" v-for="(item, index) in g$listBerita">
            <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
              <div class="d-flex flex-column">
                <h6 class="mb-3 text-m">{{ item.judul }}</h6>
                <span class="mb-2 text-xs">{{
                  new Date(item.created_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long', day: 'numeric', minute: '2-digit', hour: '2-digit'
                  })
                }}</span>
                <span class="mb-2 text-xs">
                  <span class="text-dark ms-sm-2 font-weight-bold">{{ item.isi.slice(0, 200) + '...' }}</span>
                </span>
              </div>
              <div class="d-flex">
                <button class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
                  @click="getBerita(item.id_berita)">
                  <i class="ni ni-bold-right" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import d$berita from "@/store/berita"
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "berita",
  computed: {
    ...mapState(d$berita, ['g$listBerita'])
  },
  methods: {
    ...mapActions(d$berita, ['a$listBerita']),

    async getBerita(id_berita) {
      try {
        this.$router.push({ name: 'Detail Berita', params: { id_berita } })
      } catch (error) {
        console.log(error)
      }
    },

    async addBerita() {
      try {
        this.$router.push({ name: 'Add Berita' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created() {
    try {
      await this.a$listBerita()
    } catch (error) {
      console.log(error)
    }
  },

  components: {
    ArgonAvatar,
    ArgonButton
  },
};
</script>
