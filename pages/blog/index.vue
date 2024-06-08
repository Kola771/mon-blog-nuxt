<template>
  <div>
    <ContentList path="/blog" :query="query">
      <template #default="{ list }">
        <div class="flex flex-col gap-y-4">
          <div v-for="(blog, index) in list" :key="index" class="bg-white shadow-md rounded-2xl">
            <div class="h-[320px]">
              <img :src="blog.thumbnail" class="h-full w-full" alt="image" />
            </div>
            <h2 class="font-bold text-2xl">
              <NuxtLink :to="'blog/' + blog.slug">{{ blog.title }}</NuxtLink>
            </h2>
            <p v-if="blog.description">{{ blog.description }}</p>
            <p>{{ formateDate(blog.date) }}</p>
          </div>
        </div>
      </template>

      <template #not-found>
        <p>Aucun article trouvé</p>
      </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { 
  path: '/articles', 
  // where: [{ layout: 'article' }], 
  // limit: 5, 
  sort: [{ date: -1 }]
 }

 function formateDate(date: string)
 {
  return useDateFormat(date, "YYYY-MM-DD");
 }
</script>

<style></style>