<template>
  <div class="space-footer">
    <p class="footer-text">
    © {{ year }} {{ author }} 

     &nbsp;&middot;&nbsp;
    <a href="https://charleschetty.github.io/post/rss.xml" target="_blank">RSS</a>
    </p>

  </div>

</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  computed: {
    author() {
      return this.$themeConfig.author
    },
  },
}
</script>

<style lang="stylus" scoped>
.space-footer
  // text-align: center
  margin-top: 6rem
  margin-bottom: 0

  .footer-text
    color: #2c3e50 !important
    font-size: 15px
    font-weight: light
</style>
