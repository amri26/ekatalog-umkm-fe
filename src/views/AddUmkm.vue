<template>
  <main>
    <div class="py-4 container-fluid">
      <div class="row">
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
                  <argon-input type="text" v-model="input.nama_usaha" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Bidang Usaha</label
                  >
                  <select class="form-select form-select" v-model="input.bidang_usaha">
                    <option v-for="(item, index) in g$listJenis" :value=item.id_jenis>{{ item.nama }}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Luas Lahan</label
                  >
                  <input class="form-control" type="number" v-model="input.luas_lahan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Modal</label
                  >
                  <argon-input type="number" v-model="input.modal" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Jumlah Tenaga Kerja</label
                  >
                  <argon-input type="number" v-model="input.jumlah_tenaga_kerja" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Kapasitas Penjualan</label
                  >
                  <argon-input type="number" v-model="input.kapasitas_penjualan" />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Informasi Kontak</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Nama Lengkap</label
                  >
                  <argon-input type="text" v-model="input.nama_lengkap" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >NIK</label
                  >
                  <argon-input type="text" v-model="input.nik" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Jenis Kelamin</label
                  >
                  <argon-input type="text" v-model="input.jenis_kelamin" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Tanggal Lahir</label
                  >
                  <argon-input type="date" v-model="input.tanggal_lahir" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Dusun</label
                  >
                  <argon-input type="text" v-model="input.pemohon_dusun" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Desa</label
                  >
                  <argon-input type="text" v-model="input.pemohon_desa" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Kecamatan</label
                  >
                  <argon-input type="text" v-model="input.pemohon_kecamatan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Dusun</label
                  >
                  <argon-input type="text" v-model="input.usaha_dusun" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Desa</label
                  >
                  <argon-input type="text" v-model="input.usaha_desa" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Usaha Kecamatan</label
                  >
                  <argon-input type="text" v-model="input.usaha_kecamatan" />
                </div>
                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label"
                    >Kode Pos</label
                  >
                  <argon-input type="text" v-model="input.usaha_kode_pos" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >No. HP</label
                  >
                  <argon-input type="text" v-model="input.no_hp" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Email</label
                  >
                  <argon-input type="text" v-model="input.email" />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Tentang Saya</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Pendata</label
                  >
                  <argon-input type="text" v-model="input.nama_pendata" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >OSS Email</label
                  >
                  <argon-input type="text" v-model="input.oss_email" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >OSS Username</label
                  >
                  <argon-input type="text" v-model="input.oss_username" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >OSS Password</label
                  >
                  <argon-input type="text" v-model="input.oss_password" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Keterangan</label
                  >
                  <argon-input type="text" v-model="input.keterangan" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Gambar</label
                  >
                  <argon-input type="file" id="file" v-model="img" @change="submitFile($event)" />
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center">
                <argon-button @click="addUmkm()" color="primary" size="sm" class="ms-auto">SUBMIT</argon-button>
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
import d$jenis from '@/store/jenis';
import d$umkm from '@/store/umkm';
import d$img from "../store/gambar";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "add umkm",
  data() {
    return {
      showMenu: false,
      input: {},
      img: "",
    };
  },
  components: { ArgonInput, ArgonButton },

  computed: {
    ...mapState(d$jenis, ['g$listJenis']),
    ...mapState(d$img, ['g$addImg']),
  },
  methods: {
    ...mapActions(d$jenis, ['a$listJenis']),
    ...mapActions(d$umkm, ['a$addUmkm']),
    ...mapActions(d$img, ['a$addImg']),

    async submitFile(event) {
      this.file = event.target.files[0]
      this.fileData = new FormData();
      this.fileData.append('file', this.file);
    },

    async addUmkm() {
      try {
        await this.a$addImg(this.fileData);
        const data = {
          ...this.input,
          luas_lahan: Number(this.input.luas_lahan),
          modal: Number(this.input.modal),
          jumlah_tenaga_kerja: Number(this.input.jumlah_tenaga_kerja),
          kapasitas_penjualan: Number(this.input.kapasitas_penjualan),
          tanggal_lahir: new Date(this.input.tanggal_lahir).toISOString(),
          id_gambar: Number(this.g$addImg.id_gambar)
        }
        await this.a$addUmkm(data)
        this.$router.push({ name: 'Tables' })
      } catch (error) {
        console.log(error)
      }
    }
  },

  async created() {
    await this.a$listJenis()
  },
  async mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
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
