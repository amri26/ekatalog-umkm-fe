<template>
  <main>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-profile mb-4">
            <img alt="Image placeholder" class="card-img-top" ref="image" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Detail Usaha</p>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Informasi Usaha</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Nama Usaha</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.nama_usaha" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Bidang Usaha</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.jenis.nama" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Luas Lahan</label
                  >
                  <input class="form-control" type="number" v-model="g$getUmkm.luas_lahan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Modal</label
                  >
                  <argon-input type="number" v-model="g$getUmkm.modal" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Jumlah Tenaga Kerja</label
                  >
                  <argon-input type="number" v-model="g$getUmkm.jumlah_tenaga_kerja" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Kapasitas Penjualan</label
                  >
                  <argon-input type="number" v-model="g$getUmkm.kapasitas_penjualan" />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Informasi Kontak</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Nama Lengkap</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.nama_lengkap" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >NIK</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.nik" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Jenis Kelamin</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.jenis_kelamin" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Tanggal Lahir</label
                  >
                  <argon-input type="text" v-model="input.dateBirth" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Dusun</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.pemohon_dusun" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Desa</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.pemohon_desa" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Kecamatan</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.pemohon_kecamatan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Dusun</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.usaha_dusun" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Desa</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.usaha_desa" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Kecamatan</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.usaha_kecamatan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Kode Pos</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.usaha_kode_pos" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >No. HP</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.no_hp" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Email</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.orang.email" />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Tentang Saya</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Pendata</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.nama_pendata" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >OSS Email</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.oss_email" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >OSS Username</label
                  >
                  <argon-input type="text" v-model="g$getUmkm.oss_username" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import d$umkm from '@/store/umkm';
import d$img from "@/store/gambar";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "detail umkm",
  data() {
    return {
      showMenu: false,
      input: {},
    };
  },
  components: { ArgonInput, ArgonButton },

  computed: {
    ...mapState(d$umkm, ['g$getUmkm']),
    ...mapState(d$img, ['g$getImg']),
  },
  methods: {
    ...mapActions(d$umkm, ['a$getUmkm']),
    ...mapActions(d$img, ['a$getImg']),
  },

  async created() {
    await this.a$getUmkm({ id_usaha: Number(this.$route.params.id_usaha) })
    
  },
  async mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();

    this.input.dateBirth = new Date(this.g$getUmkm.orang.tanggal_lahir).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })

    await this.a$getImg({ id_gambar: this.g$getUmkm.id_gambar })

    const blob = new Blob([this.g$getImg], { type: 'image/jpeg' });
    this.objectURL = URL.createObjectURL(blob);
    this.$refs['image'].src = this.objectURL;
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
