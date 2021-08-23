<template>
  <div class="home-page">
    <HomeHeader />
    <v-container v-if="insights.length > 0" style="margin-top: -95px" class="pa-4">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-0">
          <Card v-for="insight of insights" :key="insight.id" :insight="insight" />
        </v-col>
      </v-row>
    </v-container>
    <h5 v-if="insights.length < 1 && !isLoading" class="text-center pt-2">Não há insights cadastrados</h5>
    <ShowMore ref="showMore" />
    <v-container class="pa-0 float-component-clear-fix">
      <v-sheet class="float-component-wrapper" color="transparent">
        <v-text-field
          solo
          placeholder="Pesquise por termos ou categorias"
          height="56"
          append-icon="mdi-magnify"
          @click="openSearch()"
        ></v-text-field>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue';
import Card from '../components/Card.vue';
import ShowMore from '../components/ShowMore.vue';
import Insight from '../services/insight';

export default {
  data() {
    return {
      isLoading: true,
      insights: [],
      showMore: null,
      page: 0
    }
  },
  components: {
    Card,
    HomeHeader,
    ShowMore
  },
  mounted() {
    this.showMore = this.$refs.showMore;

    this.loadInsights();
    this.$watch( "$refs.showMore.page", (newVal) => {
      this.page = newVal;
      this.loadInsights();
    });
  },
  methods: {
    loadInsights: function() {
      this.showMore.showLoader();
      this.showMore.hideLoadButton();

      Insight.list({page: this.page}).then(result => {
        this.isLoading = false;
        this.insights.push(...result.data.insight);
        this.showMore.hideLoader();

        if(result.data.insight.length > 0) {
          this.showMore.showLoadButton();
        }
      });
    },
    openSearch: function() {
      this.$router.push({name: 'Search'});
    }
  }
}
</script>