<template>
  <a-result status="404" title="404" :sub-title="message">
    <template #extra>
      <a-button type="primary" @click="toHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception404',
  computed: {
    message() {
      return this.$route.query.message || 'Sorry, the page you visited does not exist.'
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
