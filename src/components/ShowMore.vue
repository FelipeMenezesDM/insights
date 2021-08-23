<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3" v-if="isLoading" class="pa-0 pt-2">
        <v-progress-linear
          color="grey"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" align="center" v-if="hasMore">
        <v-btn text class="load-more-btn" @click="page++">Toque para exibir mais insights</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ShowMore',
  data: () => ({
    isLoading: false,
    hasMore: false,
    page: 0
  }),
  methods: {
    showLoader: function() {
      this.isLoading = true;
    },
    hideLoader: function() {
      this.isLoading = false;
    },
    showLoadButton: function() {
      this.hasMore = true;
    },
    hideLoadButton: function() {
      this.hasMore = false;
    },
    resetPage: function() {
      this.page = 0;
    }
  }
}
</script>