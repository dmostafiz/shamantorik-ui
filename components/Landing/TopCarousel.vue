<template>
    <v-card class="">

        <template #title>
            <div class="flex items-center justify-between">
                <h1 class=" text-slate-600 font-semibold text-xl">জনপ্রিয় বই সমূহ</h1>

                <NuxtLink to="/all_books" class="">
                    <span class="text-blue-900 text-sm">সামান্তরিক লাইব্রেরী</span>
                </NuxtLink>
            </div>
        </template>

        <template #text>
            <CardCarousel />

        </template>

    </v-card>
</template>