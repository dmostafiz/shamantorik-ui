<template>
  <v-menu
    v-model="menu"
    location="top start"
    origin="top start"
    transition="scale-transition"
  >
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot>
          <v-chip link pill size="small" color="white" variant="flat">
            <v-avatar start>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>

            <span class="text-sm">মোস্তাফিজ রহমান</span>
          </v-chip>
        </slot>
      </div>
    </template>

    <v-card width="300">
      <v-list bg-color="">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar image="https://cdn.vuetifyjs.com/images/john.png"></v-avatar>
          </template>

          <v-list-item-title>মোস্তাফিজ রহমান</v-list-item-title>

          <v-list-item-subtitle>২৩০ জন ফলোয়ার</v-list-item-subtitle>

          <template v-slot:append>
            <v-list-item-action>
              <v-btn variant="text" icon @click="menu = false">
                <v-icon>mdi-close-circle</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item prepend-icon="mdi-user" link>
          <v-list-item-subtitle>প্রোফাইল দেখুন</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
const menu = ref(false);
</script>

<style></style>
