<template>
  <div class="view-tag-page">
    <Header />
    <h5 v-if="isNotFound" class="text-center pt-2">Categoria não localizada</h5>
    <v-row class="ma-0" v-if="insights.length > 0">
      <v-col cols="12" class="pa-4">
        <Card v-for="insight of insights" :key="insight.id" :insight="insight" />
      </v-col>
    </v-row>
    <ShowMore ref="showMore" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import ShowMore from '../components/ShowMore.vue';
import Insight from '../services/insight';
import Tag from '../services/tag';

export default {
  name: 'ViewTag',
  data: () => ({
    insights: [],
    showMore: null,
    page: 0,
    isNotFound: false
  }),
  components: {
    Header,
    Card,
    ShowMore
  },
  async mounted() {
    this.showMore = this.$refs.showMore;

    await Tag.get(this.$route.params.s).then(result => {
      if(result.data.tag) {
        this.$route.meta.highlightTitle = result.data.tag.name;
        this.loadInsights();
      }else{
        this.isNotFound = true;
      }
    });

    this.$watch( "$refs.showMore.page", (newVal) => {
      this.page = newVal;
      this.loadInsights();
    });
  },
  methods: {
    loadInsights: function() {
      this.showMore.showLoader();
      this.showMore.hideLoadButton();
      Insight.search({s: this.$route.params.s, page: this.page}).then(result => {
        this.insights.push(...result.data.insight);
        this.showMore.hideLoader();

        if(result.data.insight.length > 0) {
          this.showMore.showLoadButton();
        }
      });
    }
  }
}
</script>