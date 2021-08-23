<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3" class="pa-0">
        <v-progress-linear
          :active="isLoading"
          color="grey"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
      <v-col cols="12" align="center" v-if="hasMore">
        <v-btn text class="load-more-btn">Toque para exibir mais insights</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ShowMore',
  data: () => ({
    isLoading: false,
    hasMore: false
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
    }
  }
}
</script>