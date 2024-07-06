<template>
  <v-card variant="elevated" class="mx-auto mb-5">

    <template #title>
      <h3 class="text-sm font-bold">{{ comment?.user?.name }}</h3>
    </template>

    <template #prepend>
      <div class="mr-1">
        <UserCardPopup>
          <UAvatar class="cursor-pointer" size="sm" :src="comment?.user?.image" alt="Avatar" />
        </UserCardPopup>
      </div>
    </template>

    <template #subtitle>
      <div class="flex items-center gap-1 text-md  text-zinc-600">
        <span class="text-xs">{{ comment?.date }}</span>
      </div>
    </template>

    <template #text>
      <div class="flex flex-col lg:flex-row items-center gap-3">
        <div class="flex-1">
          <div class="!text-[16px] !text-zinc-600">
            {{ comment?.text }}
            <NuxtLink to="/post/dfdf">
              <span class="text-blue-900">আরো পড়ুন</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-2 justify-between pt-5">

        <div class="flex gap-2 text-xs text-zinc-500">
          <span>{{ comment?.likes }} টি লাইক </span>
          <span>.</span>
          <span @click="() => showReplies(comment.id)" class="text-blue-700 cursor-pointer">{{ comment?.comments?.length
            }} টি রিপ্লাই</span>
        </div>
        <div>

        </div>
      </div>
    </template>

    <div class="hidden" :class="(props?.comment?.comments?.length && comment_id == comment.id) && '!block'">
      <v-card-text>
        <div v-for="(reply, index) in props?.comment?.comments" :key="index" class="pl-8">
          <CommentCard :comment="reply" />
        </div>
      </v-card-text>
    </div>


  </v-card>

</template>

<script setup>
const props = defineProps(['comment'])
const comment_id = ref(null)

const { comment_ref } = useRoute()?.query



const showReplies = (commentId) => {
  comment_id.value = commentId
}


onMounted(() => {

  console.log('props comment id: ', props.comment.id)
  console.log('ref comment id: ', comment_ref)


  if (comment_ref && comment_ref == props.comment.id) {
    console.log(`the component is now mounted.`)
    console.log('comment_id: ', comment_ref)
    comment_id.value = props?.comment?.id
  }
})

</script>

<style></style>