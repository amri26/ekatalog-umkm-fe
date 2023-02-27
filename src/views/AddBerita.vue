<template>
  <main>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Detail Iklan</p>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Informasi Iklan</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Judul</label
                  >
                  <argon-input type="text" v-model="input.judul" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Isi</label
                  >
                  <textarea class="form-control" v-model="input.isi" rows="12"></textarea>
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
                <argon-button @click="addBerita()" color="primary" size="sm" class="ms-auto">SUBMIT</argon-button>
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
import d$berita from "../store/berita";
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
    ...mapState(d$img, ['g$addImg']),
  },
  methods: {
    ...mapActions(d$berita, ['a$addBerita']),
    ...mapActions(d$img, ['a$addImg']),

    async submitFile(event) {
      this.file = event.target.files[0]
      this.fileData = new FormData();
      this.fileData.append('file', this.file);
    },

    async addBerita() {
      try {
        await this.a$addImg(this.fileData);
        const data = {
          ...this.input,
          id_gambar: Number(this.g$addImg.id_gambar)
        }
        await this.a$addBerita(data)
        this.$router.push({ name: 'Berita' })
      } catch (error) {
        console.log(error)
      }
    }
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
