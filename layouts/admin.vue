<template>
  <v-app>
    <ClientOnly>
      <v-layout class="rounded-md">
        <v-navigation-drawer width="250"  v-model="drawer" elevation="0"
          class="!border-none !fixed" fixed>
          <div class="pr-[4px] bg-black/20 h-full shadow">
            <div class="bg-black h-full">
              <v-list class="!bg-slate-900">
                <v-list-item elevation="0">
                  <LogoMain href="/admin" class="text-slate-200" />
                </v-list-item>
              </v-list>

              <SidebarAdmin />

              <!-- <AccountSidebarFreelancer v-if="authStore.account_type == 'freelancer'" />
              <AccountSidebarClient v-else /> -->

            </div>
          </div>
        </v-navigation-drawer>

        <v-app-bar class="!bg-green-100 !space-x-5 !z-40 !fixed" elevation="0"
          :class="scroll < 10 ? '!bg-transparent !text-slate-500' : ' !bg-white/70 backdrop-blur-xl transition duration-500 !shadow-lg'">
          <template v-slot:prepend>
            <div class="flex flex-col xl:flex-row xl:gap-2 xl:items-center">
              <div class="flex gap-2 items-center">
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

                <LogoMain href="/admin/home" class="!w-[100px]  mr-5" :class="drawer && 'xl:hidden'" />

                <h3 class="font-semibold text-slate-500">{{ title }}</h3>
              </div>
            </div>
          </template>

        
        </v-app-bar>

        <v-main class="pb-5 w-full">
          <div class="bg-slate-50 !w-full !h-full px-[25px]">
            <div class="!flex !flex-col lg:!flex-row gap-5">
              <div class="flex-1">
                <slot></slot>
              </div>
              <!-- <div :class="!rightSidebar && 'hidden'" class="lg:!w-[260px] lg:pl-4 mt-5 lg:!border-l !border-slate-200"> -->
                <!-- <slot name="rightSidebar"> -->
                  <!-- <FreelancerRightSidebar v-if="authStore.account_type == 'freelancer'"/> -->
                <!-- </slot> -->
              <!-- </div> -->
            </div>
          </div>
        </v-main>

        <v-footer>
          <div class="py-5"></div>
        </v-footer>
      </v-layout>


      <template #fallback>
        <!-- this will be rendered on server side -->
        <div class="h-[100vh] w-full flex items-center justify-center">
          <LogoMain />
        </div>
      </template>

    </ClientOnly>
  </v-app>
</template>

<script setup>

//  import { useWindowScroll } from '@vueuse/core'



const props = defineProps({
  title: String,
  sidebar: {
    type: Boolean,
    default: true
  },
  rightSidebar: {
    type: Boolean,
    default: true
  },

})
// const { isDesktop } = useDevice();

const drawer = ref(false);
const isParmanent = ref(true)

const items = ref([
  { title: 'Create project' },
  { title: 'Create Task' }
])


const scroll = ref(0)
// const { x, y } = useWindowScroll()

watchEffect(() => {
  // console.log('Scrolling... ', y.value)
  // scroll.value = y.value
})

onMounted(() => {
  // drawer.value = (isDesktop && props.sidebar == true) ? true : false

  // isParmanent.value = isDesktop ? true : false
})


</script>

<style></style>
