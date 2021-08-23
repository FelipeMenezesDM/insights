<template>
  <div class="view-tag-page">
    <Header />
    <v-row class="ma-0">
      <v-col cols="12" class="pa-4">
        <Card v-for="insight of insights" :key="insight.id" :insight="insight" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import Insight from '../services/insight';
import Tag from '../services/tag';

export default {
  name: 'ViewTag',
  data() {
    return {
      insights: []
    }
  },
  components: {
    Header,
    Card
  },
  mounted() {
    Tag.get(this.$route.params.s).then(result => {
      this.$route.meta.highlightTitle = result.data.tag.name;
    });

    Insight.search(this.$route.params).then(result => {
      this.insights = result.data.insight;
    });
  }
}
</script>