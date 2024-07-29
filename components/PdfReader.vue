<script setup>
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const pdfUrl =
  "https://shop-xcelerate.s3.us-west-1.amazonaws.com//%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF+%E0%A6%A4%E0%A7%81%E0%A6%AE%E0%A6%BF+%E0%A6%B8%E0%A6%BE%E0%A6%A5%E0%A7%80.pdf";
// const pdfUrl = "/book1.pdf";

const page = ref(10);
const pdfLoaded = ref(0);
const { pdf, pages } = usePDF(pdfUrl, {
  // onPassword,
  onProgress,
  onError,
});

const pdfLoading = ref(true);
function onLoaded(value) {
  // console.log('pdf loaded: ', value)
  pdfLoading.value = false;
}

function onProgress({ loaded, total }) {
  console.log(`${(loaded / total) * 100}% Loaded`);
  pdfLoaded.value = (loaded / total) * 100;
}

function onError(reason) {
  console.error(`PDF loading error: ${reason}`);
}

const watermarkOptions = ref({
  columns: 1,
  rows: 1,
  color: "#DCE3E9",
  rotation: 25,
  fontSize: 70,
});

const bookFrameRef = ref();

const showControll = ref(true);

const previousPage = () => {
  page.value = page.value > 1 ? page.value - 1 : page.value;
  controllerSetup();
};

const nextPage = () => {
  page.value = page.value < pages.value ? page.value + 1 : page.value;
  controllerSetup();
};

function controllerSetup() {
  if (bookFrameRef) {
    bookFrameRef.value.scrollTop = 0;
  }

  // showControll.value = false
}

const onScrollHandler = (e) => {
  const scrollTop = e.target.scrollTop;
  const scrollHeight = e.target.scrollHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  if (scrollPercent > 48) {
    showControll.value = true;
  }
};

const scale = ref(1.75);
const fitParent = ref(true);
const zoomPlus = () => {
  fitParent.value = false;
  scale.value = scale.value + 0.25;
};

const zoomMinus = () => {
  fitParent.value = false;
  scale.value = scale.value - 0.25;
};
</script>

<template>
  <ScrollPanel
    :dt="{
      bar: {
        background: '#D3AC19',
        width: '20px'
      },
    }"
    ref="bookFrameRef"
    @scroll="(e) => onScrollHandler(e)"
    :class="pdfLoading == false && 'h-[580px]'"
    class="w-full overflow-y-auto"
  >
    <VuePDF
      :pdf="pdf"
      :page="page"
      @loaded="onLoaded"
      :scale="scale"
      watermark-text="সামান্তরিক"
      :watermark-options="watermarkOptions"
      :fit-parent="fitParent"
    >
      <div class="w-full flex flex-col items-center justify-center py-20">
        <ProgressSpinner strokeWidth="1" />
        <!-- <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular> -->
      </div>
    </VuePDF>
  </ScrollPanel>

  <div v-if="pdfLoading == false" class="px-2 lg:px-10">
    <div class="flex gap-4 py-5 justify-between">
      <div></div>
      <div class="flex gap-4 justify-center items-center">
        <v-btn
          :disabled="showControll == false"
          @click="previousPage"
          class="text-none !font-bold"
          icon
          variant="tonal"
          color="teal-darken-3"
        >
          <!-- <Icon name="solar:notebook-bookmark-outline" size="22" /> -->
          <span>{{ "<" }}</span>
        </v-btn>

        <span>{{ page }} / {{ pages }}</span>

        <v-btn
          :disabled="showControll == false"
          @click="nextPage"
          class="text-none !font-bold"
          icon
          variant="tonal"
          color="teal-darken-3"
        >
          <!-- <Icon name="solar:caret-right" size="22" /> -->
          <span>{{ ">" }}</span>
        </v-btn>
      </div>

      <div class="flex gap-2">
        <v-btn
          @click="zoomMinus"
          class="text-none !font-bold"
          icon
          variant="flat"
          color="gray-darken-3"
        >
          <!-- <Icon name="solar:notebook-bookmark-outline" size="22" /> -->
          -
        </v-btn>

        <v-btn
          @click="zoomPlus"
          class="text-none !font-bold"
          icon
          variant="flat"
          color="gray-darken-3"
        >
          <!-- <Icon name="solar:notebook-bookmark-outline" size="22" /> -->
          +
        </v-btn>
      </div>
    </div>
  </div>

  <div v-else class="w-full flex flex-col items-center justify-center h-[500px]">
    <v-progress-circular
      :model-value="pdfLoaded"
      :rotate="360"
      :size="120"
      :width="10"
      color="gray"
    >
      <template v-slot:default> {{ parseInt(pdfLoaded) }} % </template>
    </v-progress-circular>
    <div class="mt-4">
      <p>বইটি লোড হচ্ছে</p>
    </div>

    <!-- <ProgressBar :value="20"></ProgressBar> -->
    <!-- <ProgressSpinner strokeWidth="1" /> -->
    <!-- <div class="w-full px-20">
      <ProgressBar :value="pdfLoaded"> {{ pdfLoaded }}/100 </ProgressBar>
    </div> -->
    <!-- <Button>Loading...</Button> -->
    <!-- <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular> -->
  </div>
</template>
