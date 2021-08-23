<template>
  <div class="add-insight-page">
    <Header />
    <form ref="form">
      <v-container class="pa-4">
        <v-row class="ma-0">
          <v-col cols="12" class="pa-0">
            <v-card align="center" class="v-card-item handler-insight-card">
              <v-row class="ma-0">
                <v-col cols="12" class="pa-4">
                  <h6 class="field-title">Insight</h6>
                  <v-textarea
                    class="rounded-0"
                    v-model="insight.texto"
                    placeholder="Escreva aqui o seu insight."
                    hide-details="true"
                    solo
                  ></v-textarea>
                  <p class="field-legend">Limite de caracteres: 400</p>
                </v-col>
                <v-col cols="12" class="pa-4">
                  <h6 class="field-title">Categoria</h6>
                  <v-combobox
                    v-model="insight.tags"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    item-text="name"
                    item-value="id"
                    hide-no-data
                    hide-selected
                    chips
                    placeholder="Adicione uma categoria (opcional)..."
                    hide-details="true"
                    multiple
                    solo
                  >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                      <v-chip
                        v-bind="attrs"
                        :input-value="selected"
                        close
                        @click="select"
                        @click:close="remove(item)"
                      >
                        <strong>{{ !item.name ? item : item.name }}</strong>
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pa-0 float-component-clear-fix">
        <v-sheet class="float-component-wrapper" color="transparent">
          <v-btn
            block
            x-large
            @click="submit"
          >Publicar</v-btn>
        </v-sheet>
      </v-container>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Insight from '../services/insight';
import Tag from '../services/tag';

export default {
  data () {
    return {
      descriptionLimit: 25,
      entries: [],
      isLoading: false,
      insight: {
        tags: null,
        texto: null
      },
      search: null
    }
  },
  computed: {
    fields () {
      if (!this.insight.tags) {
        return [];
      }

      return Object.keys(this.insight.tags).map(key => {
        return {
          key,
          value: this.insight.tags[key] || 'n/a'
        }
      });
    },
    items () {
      return this.entries.map(entry => {
        const name = entry.name.length > this.descriptionLimit
          ? entry.name.slice(0, this.descriptionLimit) + '...'
          : entry.name;

        return Object.assign({}, entry, {name});
      });
    }
  },
  mounted() {
    if(this.$route.params.id) {
      Insight.getInfo(this.$route.params).then(result => {
        this.insight.tags = result.data.insight.tags;
        this.insight.texto = result.data.insight.texto;
      });
    }
  },
  watch: {
    search(valSearch) {
      if (this.items.length > 0)
        return;

      if (this.isLoading)
        return;

      this.isLoading = true;

      Tag.searchTags(valSearch)
      .then(res => res.data)
      .then(res => {
        this.entries = res.tag;
      })
      .finally(() => {
        this.isLoading = false
      });
    }
  },
  methods: {
    remove(item) {
      const index = this.insight.tags.findIndex(x => x.id === item.id);
      this.insight.tags.splice(index, 1);
      this.insight.tags = [...this.insight.tags];
    },
    save() {
      if(this.insight.id) {
        Insight.put(this.insight).then(() => {
          this.$router.push('/');
        });
      }else{
        Insight.post(this.insight).then(() => {
          this.$router.push('/');
        });
      }
    },
    submit() {
      this.save();
    }
  },
  components: {
    Header
  }
}
</script>