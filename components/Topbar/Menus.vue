<template>
  <v-toolbar color="transparent" density="compact">

    <v-btn class="text-none lg:!hidden" stacked>
      <Icon name="uil:bars" size="25" />
    </v-btn>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-spacer></v-spacer>

    <!-- <v-btn @click="navigateTo('/')" class="text-none" stacked>
      <v-badge color="success" dot>
        <v-icon>mdi-home-outline</v-icon>
      </v-badge>
    </v-btn> -->

    <v-btn class="text-none" stacked>
      <v-icon>mdi-account-multiple-outline</v-icon>
    </v-btn>



    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn class="text-none" v-bind="props" stacked>
          <v-badge color="error" content="৯+">
            <v-icon>mdi-store-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>আদ্রস্লিম্প মেসেজ করেছেন</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn class="text-none" stacked>
      <v-badge color="error" content="৪">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>

    <!-- <v-btn class="text-none" stacked>
<v-icon>mdi-menu</v-icon>
</v-btn> -->

    <v-spacer></v-spacer>

    <v-btn class="text-none" stacked>
      <v-avatar class="cursor-pointer" size="small">
        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
      </v-avatar>
    </v-btn>

  </v-toolbar>
</template>

<script lang="ts" setup>

</script>

<style></style>