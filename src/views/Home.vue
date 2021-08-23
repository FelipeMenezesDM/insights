<template>
  <div class="home-page">
    <HomeHeader />
    <v-container style="margin-top: -95px" class="pa-4">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-0">
          <Card v-for="insight of insights" :key="insight.id" :insight="insight" />
        </v-col>
      </v-row>
    </v-container>
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
        <v-col cols="12" align="center">
          <v-btn text class="load-more-btn">Toque para exibir mais insights</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0 float-component-clear-fix">
      <v-sheet class="float-component-wrapper" color="transparent">
        <v-text-field
          solo
          placeholder="Pesquise por tempos ou categorias"
          height="56"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue';
import Card from '../components/Card.vue';
import Insight from '../services/insight';

export default {
  data() {
    return {
      isLoading: false,
      insights: []
    }
  },
  components: {
    Card,
    HomeHeader
  },
  mounted() {
    Insight.list().then(result => {
      this.insights = result.data.insight;
    });
  }
}
</script>