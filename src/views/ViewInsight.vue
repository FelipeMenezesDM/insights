<template>
  <div class="add-insight-page">
    <Header />
    <h5 v-if="isNotFound" class="text-center pt-2">Insight não localizado</h5>
    <v-row class="ma-0" v-if="insight.id">
      <v-col cols="12" class="pa-4">
        <Card :insight="insight" :showActions="true" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Insight from '../services/insight';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';

export default {
  data: () => ({
    insight: {},
    isNotFound: false
  }),
  components: {
    Header,
    Card
  },
  async mounted() {
    await Insight.getInfo(this.$route.params).then(result => {
      if(result.data.insight) {
        this.insight = result.data.insight;
      }else{
        this.isNotFound = true;
      }
    });
  }
}
</script>