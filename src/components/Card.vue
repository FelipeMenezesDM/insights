<template>
  <div class="card-body">
    <Confirmation
      ref="confirm"
      :title="'Você tem certeza que deseja remover este Insight?'"
      :object="insight"
      :onConfirm="deleteInsight"
    />
    <v-card align="center" class="v-card-item">
      <v-card-subtitle class="card-text" @click="viewInsight(insight.id)">{{ insight.texto }}</v-card-subtitle>
      <v-container v-if="insight.tags && insight.tags.length > 0" class="px-4 py-3">
        <v-chip
          label outlined
          class="v-tag ma-1"
          v-for="tag of insight.tags" :key="tag.id"
          @click="viewTag(tag.name)"
        >{{tag.name}}</v-chip>
      </v-container>
      <v-card-actions v-if="showActions">
        <v-spacer></v-spacer>
        <v-btn icon @click="editInsight(insight.id)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click.stop="confirm.show()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Insight from '../services/insight';
import Confirmation from '../components/Confirmation.vue';

export default {
  data() {
    return {
      confirm: null
    }
  },
  mounted() {
    this.confirm = this.$refs.confirm;
  },
  props: ['insight', 'showActions'],
  name: 'Card',
  components: {
    Confirmation
  },
  methods: {
    viewInsight: function(insightId) {
      if(this.$route.name != 'ViewInsight') {
        this.$router.push({name: 'ViewInsight', params: {id: insightId}});
      }
    },
    editInsight: function(insightId) {
      this.$router.push({name: 'EditInsight', params: {id: insightId}});
    },
    deleteInsight: function(insight) {
      Insight.delete({id: insight.id}).then(() => {
        this.$router.push('/');
      });
    },
    viewTag: function(tagName) {
      if(tagName != this.$route.params.s) {
        this.$router.push({name: 'ViewTag', params: {s: tagName}});
      }
    }
  }
}
</script>