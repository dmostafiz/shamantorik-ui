<template>
  <NuxtLayout name="home">

    <template #rightSidebar>
      <!-- sdf -->{{ '' }}
    </template>

    <template #leftSidebar>
      <!-- sdf -->{{ '' }}
    </template>

    <v-card>
      <v-card-text>

        <h1 class="text-xl font-bold mb-5">ব্লগ পোস্ট লিখুন</h1>

        <!-- <divider /> -->
        <div>
          <v-text-field color="none" label="টাইটেল" placeholder="পোস্ট টাইটেল" variant="outlined" place
            density="compact"></v-text-field>

          <div class="mb-5">
            <div v-if="editor" class="flex flex-wrap mb-1">
              <v-btn density="comfortable" class="!rounded-none bg-transparent" variant="flat" icon=""
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                <v-btn-icon>
                  <Icon name="tabler:bold" size="22" />
                </v-btn-icon>
              </v-btn>

              <v-btn density="comfortable" class="!rounded-none bg-transparent" variant="flat" icon=""
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                <v-btn-icon>
                  <Icon name="tabler:italic" size="22" />
                </v-btn-icon>
              </v-btn>

              <v-btn density="comfortable" class="!rounded-none bg-transparent" variant="flat" icon=""
                @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }">
                <Icon name="mdi:format-paragraph" size="22" />
              </v-btn>

              <v-btn density="comfortable" class="!rounded-none bg-transparent" variant="flat" icon=""
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
                <Icon name="carbon:quotes" size="22" />
              </v-btn>
            </div>

            <TiptapEditorContent :editor="editor" />

            <!-- <div class="is-editor-empty"></div> -->
          </div>

          <div>
            <v-select prepend-icon="" v-model="value" :items="items" label="পোস্ট ট্যাগ" chips multiple
              variant="outlined" density="compact"></v-select>
          </div>

          <v-file-input append-inner-icon="" density="compact" label="প্রচ্ছদ ছবি" variant="underlined"></v-file-input>

          <div class="text-right mt-8">
            <v-btn color="" variant="flat" class="mr-2" border>ড্রাফটে সংরক্ষণ করুন</v-btn>
            <v-btn class="" color="green" variant="flat" border>পাবলিশ করুন</v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </NuxtLayout>
</template>

<script setup>
const editor = useEditor({
  content: "",

  editorProps: {
    attributes: {
      class: "focus:outline-1 focus:min-h-[250px] min-h-[250px] p-3 border !border-gray-400 rounded-md",
      placeholder: "Ekhane likhun",
    },
  },
  extensions: [
    TiptapStarterKit,
    TiptapPlaceholder.configure({
      // emptyEditorClass: "is-editor-empty",
      placeholder: "এখানে লিখুন...",
    }),
  ],
});

const items = ref(["ওনুগল্প", "উপন্যাস", "ভাষা", "কবিতা"]);
const value = ref([]);

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>

<style>
p.is-editor-empty:first-child::before {
  color: rgb(192, 192, 192);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
