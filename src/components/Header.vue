<template>
  <v-toolbar
    src="../assets/background.svg"
    dark
    height="84"
    class="mini-header"
  >
    <v-btn fab icon @click="back()">
      <v-icon color="#ED4D77">
      mdi-arrow-left
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-container class="header-title">
      <h3 class="simple-title">{{ $route.meta.title }}</h3>
      <h3 class="highlight-title">{{ $route.meta.highlightTitle }}</h3>
    </v-container>
    <v-spacer></v-spacer>
    <v-sheet color="transparent" width="48" height="48"></v-sheet>
  </v-toolbar>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      back: function() {
        this.$router.go(-1);
      }
    }
}
</script>