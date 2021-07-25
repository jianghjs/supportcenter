<template>
  <main class="home">
    <h1>Welcome to our support center</h1>
    <p>
      We are here to help! Please read the <a> F.A.Q</a> first, and if you don'
      t find the answer to your question, <a> send us a ticket!</a>
    </p>
    
    <el-button @click="dialogVisible = true">popup</el-button>

    <el-dialog title="tip" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>message</span>
    </el-dialog>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible : false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("is close?")
      .then(_=> {
        done();
      }).catch(_=>{});
    }
  }
}
</script>