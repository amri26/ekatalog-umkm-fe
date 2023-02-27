<template>
    <main>
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-profile mb-4">
                            <img alt="Image placeholder" class="card-img-top" ref="image" />
                        </div>
                        <div class="card-header pb-0">
                            <div class="d-flex align-items-center">
                                <h2 class="text text-l mb-0">{{ g$getBerita.judul }}</h2>
                            </div>
                        </div>
                        <div class="card-body">
                            <span class="mb-2 text-xs">{{
                                new Date(g$getBerita.created_at).toLocaleDateString('id-ID', {
                                    year: 'numeric',
                                    month: 'long', day: 'numeric', minute: '2-digit', hour: '2-digit'
                                })
                            }}</span>
                            <p class="text text-m">{{ g$getBerita.isi }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import d$berita from "@/store/berita"
import d$img from "@/store/gambar";

export default {
    name: "detail-berita",

    computed: {
        ...mapState(d$berita, ['g$getBerita']),
        ...mapState(d$img, ['g$getImg']),
    },

    methods: {
        ...mapActions(d$berita, ['a$getBerita']),
        ...mapActions(d$img, ['a$getImg']),
    },

    async created() {
        try {
            await this.a$getBerita({ id_berita: Number(this.$route.params.id_berita) })
        } catch (error) {
            console.log(error)
        }
    },

    async mounted() {
        try {
            await this.a$getImg({ id_gambar: this.g$getBerita.id_gambar })

            const blob = new Blob([this.g$getImg], { type: 'image/jpeg' });
            this.objectURL = URL.createObjectURL(blob);
            this.$refs['image'].src = this.objectURL;
        } catch (error) {
            console.log(error)
        }
    }
}
</script>