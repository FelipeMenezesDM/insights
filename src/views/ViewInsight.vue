<template>
  <div class="add-insight-page">
    <Header />
    <v-row class="ma-0">
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
  data() {
    return {
      insight: {}
    }
  },
  components: {
    Header,
    Card
  },
  mounted() {
    Insight.getInfo(this.$route.params).then(result => {
      this.insight = result.data.insight;
    });
  }
}
</script>