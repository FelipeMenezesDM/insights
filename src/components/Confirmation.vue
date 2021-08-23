<template>
  <v-dialog v-model="isVisible" max-width="240">
    <v-card>
      <v-card-title class="text-h6" style="word-break: break-word !important;">
        {{title}}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="pink darken-1"
          text
          @click="hide()"
        >Não</v-btn>
        <v-btn
          color="pink darken-1"
          text
          @click="hide(); confirm(object);"
        >Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    sVisible: false
  }),
  name: 'Confirmation',
  props: ['title', 'object', 'onConfirm', 'onDecline'],
  methods: {
    show: function() {
      this.isVisible = true;
    },
    hide: function() {
      this.isVisible = false;
    },
    confirm: function(object) {
      this.$props.onConfirm(object);
    }
  }
}
</script>