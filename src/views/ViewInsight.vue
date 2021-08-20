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
        <v-card align="center" class="v-card-item">
          <v-card-subtitle class="card-text">{{ insight.texto }}</v-card-subtitle>
          <v-container v-if="insight.tags && insight.tags.length > 0" class="px-4 py-3">
            <v-chip
              label outlined
              class="v-tag ma-1"
              v-for="tag of insight.tags" :key="tag.id"
            >{{tag.name}}</v-chip>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="editInsight(insight.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click.stop="dialog = true">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Insight from '../../services/insight';
import Header from '../components/Header.vue';

export default {
  data() {
    return {
      insight: {},
      dialog: false
    }
  },
  components: {
    Header
  },
  mounted() {
    Insight.getInfo(this.$route.params).then(result => {
      this.insight = result.data.insight;
    });
  },
  methods: {
    editInsight: function(insightId) {
      this.$router.push({name: 'EditInsight', params: {id: insightId}});
    },
    deleteInsight: function(insightId) {
      Insight.delete({id: insightId}).then(() => {
        this.$router.push('/');
      });
    }
  }
}
</script>