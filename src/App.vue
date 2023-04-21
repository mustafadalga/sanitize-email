<script lang="ts" setup>
import { ref } from "vue";

const email = ref("");
</script>

<template>
    <div class="p-20 max-w-lg mx-auto">
        <label
            class="flex items-center gap-2 rounded-xl border border-gray-300 border-solid px-4 py-2 h-11 focus-within:border-purple-500"
            for="email">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 class="w-5 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-500"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>


            <input type="text"
                   maxlength="254"
                   v-model="email"
                   v-sanitize-email="email"
                   id="email"
                   placeholder="enter your email address"
                   class="w-full outline-0 placeholder-gray-500 text-blue-500 font-normal text-xs lg:text-sm"/>

        </label>
    </div>
</template>
