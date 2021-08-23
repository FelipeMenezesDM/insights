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
    <v-text-field
      placeholder="Pesquise por termos ou categorias"
      class="mt-2 pt-2"
      height="40"
      autofocus
      v-model="search.value"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  name: 'SearchHeader',
  props: ['search'],
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
}
</script>