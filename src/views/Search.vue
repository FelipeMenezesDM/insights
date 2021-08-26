<template>
  <div class="search-page">
    <SearchHeader :search="search" />
    <v-row class="ma-0">
      <v-col cols="12" class="pa-4">
        <Card v-for="insight of results" :key="insight.id" :insight="insight" />
        <ShowMore ref="showMore" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchHeader from '../components/SearchHeader.vue';
import Card from '../components/Card.vue';
import ShowMore from '../components/ShowMore.vue';
import Insight from '../services/insight';
import axios from 'axios';

export default {
  name: 'Search',
  data: () => ({
    search: {
      value: ''
    },
    results: [],
    source: null,
    showMore: null,
    page: 0
  }),
  components: {
    SearchHeader,
    Card,
    ShowMore
  },
  mounted() {
    this.showMore = this.$refs.showMore;

    this.$watch( "$refs.showMore.page", (newVal) => {
      this.page = newVal;
      this.loadInsights(this.search.value, false);
    });
  },
  watch: {
    'search.value': {
      handler: function(newValue) {
        if(!newValue) {
          this.results = [];
          this.showMore.hideLoadButton();
        }else{
          this.searchInsights(newValue);
        }
      },
      deep: true
    }
  },
  methods: {
    searchInsights: function(searchValue) {
      if(this.source != null) {
        this.source.cancel();
      }

      this.source = axios.CancelToken.source();

      this.page = 0;
      this.showMore.resetPage();
      this.loadInsights(searchValue, true);
    },
    loadInsights: function(searchValue, isSearch) {
      this.showMore.showLoader();
      this.showMore.hideLoadButton();

      Insight.search({s: searchValue, page: this.page}, this.source).then(result => {
        if(isSearch) {
          this.results = result.data.insight;
        }else{
          this.results.push(...result.data.insight);
        }

        this.source = null;
        this.showMore.hideLoader();
        
        if(result.data.insight.length > 0) {
          this.showMore.showLoadButton();
        }
      });
    }
  }
}
</script>