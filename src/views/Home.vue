<template>
  <div class="home-page">
    <v-toolbar
      height="254"
      dark
      src="../assets/background.svg"
      class="align-start home-header"
      extended
    >
      <v-row class="d-flex flex-column ma-0">
        <v-row class="d-flex justify-space-between ma-0" align="center">
          <v-img src="../assets/brand-insights@3x.svg" max-width="50" max-height="32"></v-img>
          <v-avatar width="56" height="56" class="h-avatar">
            <v-img src="../assets/logo.png" alt="Felipe Menezes"></v-img>
          </v-avatar>
          <v-sheet width="50" color="transparent" class="text-end">
            <v-btn small icon>
              <v-icon color="#ED4D77">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-sheet>
        </v-row>
        <v-row align="center" class="d-flex flex-column mt-3 home-page-title ma-0">
          <h3 class="font-italic font-weight-light">Olá, Felipe!</h3>
          <h5 class="font-italic">felipe.menezes@g.globo.com</h5>
        </v-row>
        <v-row align="center" class="d-flex flex-column py-4 sep-bar ma-0">
          <v-sheet color="#ED4D77" width="24" height="2"></v-sheet>
        </v-row>
        <v-row align="center" class="d-flex flex-column ma-0 feed-label">
          <h3 class="font-weight-light font-italic">Feed de <span class="font-weight-medium">Insights</span></h3>
        </v-row>
      </v-row>
    </v-toolbar>
    <v-container style="margin-top: -95px" class="pa-4">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-0">
          <v-card align="center" class="v-card-item">
            <v-card-subtitle class="card-text">Flamengo consegue boa vitória fora de casa na estreia da Copa Libertadores 2021.</v-card-subtitle>
          </v-card>
          <v-card align="center" class="v-card-item">
            <v-card-subtitle class="card-text">Flamengo consegue boa vitória fora de casa na estreia da Copa Libertadores 2021.</v-card-subtitle>
            <v-container class="pa-4">
              <v-chip label outlined class="v-tag">Categoria</v-chip>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="3">
          <v-progress-linear
            color="grey"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
        <v-col cols="12" align="center">
          <v-btn text class="load-more-btn">Toque para exibir mais insights</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0 search-clear-fix">
      <v-sheet class="search-field-wrapper" color="transparent">
        <v-text-field
          solo
          placeholder="Pesquise por tempos ou categorias"
          height="56"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-sheet>
    </v-container>
  </div>
</template>
