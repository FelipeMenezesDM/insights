<template>
  <div class="home-page">
    <v-toolbar
      height="244"
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
          <h3 class="font-weight-light">Feed de <span class="font-weight-medium">Insights</span></h3>
        </v-row>
      </v-row>
    </v-toolbar>
  </div>
</template>
