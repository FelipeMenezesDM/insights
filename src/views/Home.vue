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
      isLoading: false,
      insights: [],
      showMore: null
    }
  },
  components: {
    Card,
    HomeHeader,
    ShowMore
  },
  mounted() {
    this.showMore = this.$refs.showMore;

    this.showMore.showLoader();
    this.showMore.hideLoadButton();

    Insight.list().then(result => {
      this.showMore.hideLoader();
      this.showMore.showLoadButton();
      this.insights = result.data.insight;
    });
  },
  methods: {
    openSearch: function() {
      this.$router.push({name: 'Search'});
    }
  }
}
</script>