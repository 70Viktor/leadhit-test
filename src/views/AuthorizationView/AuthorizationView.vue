<template>
    <section>
        <form class="form">
            <h1 class="form__title">LeadHit</h1>
            <div class="form__input">
                <input
                        required="required"
                        type="text"
                        v-model="siteID"
                        @input="invalidSiteID = false"
                        :class="{'invalid': invalidSiteID}"
                >
                <span>Введите ID сайта</span>
            </div>
            <button class="form__btn" @click.prevent="auth">Войти</button>
            <p :style="{'opacity': invalidSiteID ? '1' : '0'}" class="form__error">id сайта должен содержать 24 символа</p>
        </form>

    </section>

</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "AuthorizationView",
        data () {
            return {
                siteID: '',
                invalidSiteID: false
            }
        },
        methods: {
            ...mapActions(['fetchTestAuth']),
            auth() {
                localStorage.removeItem('leadhit-site-id')
                if (this.siteID.length === 24) {
                    this.invalidSiteID = false
                    this.fetchTestAuth(this.siteID)
                    .then(() => this.$router.push({ name: 'analytics' }))
                } else {
                    this.invalidSiteID = true
                }



            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>