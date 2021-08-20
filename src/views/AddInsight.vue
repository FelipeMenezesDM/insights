<template>
  <div class="add-indight-page">
    <Header />
    <v-container class="pa-4">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-0">
          <v-card align="center" class="v-card-item handler-insight-card">
            <v-row class="ma-0">
              <v-col cols="12">
                <h6>Insight</h6>
                <v-textarea
                  name="texto"
                  class="rounded-0"
                  placeholder="Escreva aqui o seu insight."
                  solo
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <h6>Insight</h6>
                <v-combobox
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  item-text="name"
                  item-value="id"
                  hide-no-data
                  hide-selected
                  chips
                  label="Your favorite hobbies"
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
                      <strong>{{ item.name }}</strong>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  data () {
    return {
      descriptionLimit: 25,
      entries: [],
      isLoading: false,
      model: null,
      search: null
    }
  },
  computed: {
    fields () {
      if (!this.model) {
        return [];
      }

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
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
  watch: {
    search(valSearch) {
      if (this.items.length > 0)
        return;

      if (this.isLoading)
        return;

      this.isLoading = true;

      fetch('http://localhost:3000/tag/search?s='+valSearch)
      .then(res => res.json())
      .then(res => {
        this.entries = res.tag;
      })
      .finally(() => (this.isLoading = false));
    }
  },
  methods: {
    remove (item) {
      const index = this.model.findIndex(x => x.id === item.id);
      this.model.splice(index, 1);
      this.model = [...this.model];
    },
  },
  components: {
    Header
  }
}
</script>