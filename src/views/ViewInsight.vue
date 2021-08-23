<template>
  <div class="add-insight-page">
    <Header />
    <v-row class="ma-0">
      <v-dialog v-model="dialog" max-width="240">
        <v-card>
          <v-card-title class="text-h6" style="word-break: break-word !important;">
            Você tem certeza que deseja remover este Insight?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="pink darken-1"
              text
              @click="dialog = false"
            >Não</v-btn>
            <v-btn
              color="pink darken-1"
              text
              @click="dialog = false; deleteInsight(insight.id);"
            >Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      insight: {},
      dialog: false
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