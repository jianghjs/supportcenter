<template>
  <main class="fqa">
    <h1>Frenquently Asked Questions</h1>

    <Loading v-if="loading"></Loading>

    <div class="error" v-if="error">
      Can't load the questions
    </div>

    <section class="list">
      <article v-for="question of questions" :key="question.title">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'

export default {
    data() {
        return {
            questions: [],
            error: null,
            loading: false
        }
    },
    mixins:[
      RemoteData
    ],
    // created () {
    //   fetch('http://localhost:3000/questions').then(response => {
    //     if (response.ok) {
    //       return response.json()
    //     } else {
    //       return Promise.reject('error')
    //     }
    //   }).then(result => {
    //     this.questions = result
    //   }).catch(e => {
    //     this.error = e
    //   })
    // }
    async created () {
      this.loading = true
      try {
        this.questions = await this.$fetch('questions')
      } catch (e) {
        this.error = e
      }
      this.loading = false
    }
}
</script>