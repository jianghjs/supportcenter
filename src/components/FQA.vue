<template>
  <main class="fqa">
    <h1>Frenquently Asked Questions</h1>
    <Loading v-if="loading"/>
    <Loading class="error" v-if="error">Can't load the questions.</Loading>

    <section class="list">
      <article v-for="question of questions" :key="question.id">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            error: null,
            loading: false
        }
    },
    async created() {
      this.loading = true
      try{
        this.questions = await this.$fetch('questions')
      }catch(e) {
        this.error = e
      }
      this.loading = false
    }
}
</script>