<script setup lang="ts">
import { computed } from 'vue'

const level = ref(0);
const force = ref(0);
const gold = ref(0);

const total = computed(() => Math.max(level.value + force.value, 0));

const sell = () => {
    const promptResult = prompt('Insert price', '0') ?? '0'
    const value = parseInt(promptResult)

    gold.value += value

    while (gold.value >= 1000) {
        gold.value -= 1000
        level.value++
    }
}
</script>

<template>
    <div class="h-screen flex flex-col bg-light">
        <div class="border flex flex-col grow gap-1 justify-center items-center py-6 px-4">
            <label class="text-2xl font-bold">Total</label>
            <span class="text-9xl font-extrabold">{{ total }}</span>
        </div>

        <div class="flex flex-row justify-items-stretch gap-0">
            <div class="border flex flex-row grow gap-3 justify-center items-center py-2 px-4">
                <label>Gold</label>
                <span class="text-4xl">{{ gold }}</span>
                <UIButton @click="sell" class="px-4 py-2">Sell</UIButton>
            </div>
        </div>

        <div class="flex flex-row justify-items-stretch gap-0">
            <div class="border flex flex-col grow gap-1 justify-center items-center py-2 px-4">
                <label>Level</label>
                <span class="text-6xl">{{ level }}</span>

                <div class="flex flex-row gap-2 mt-4">
                    <UIButton @click="level--">👇</UIButton>
                    <UIButton @click="level++">👆</UIButton>
                </div>
            </div>

            <div class="border flex flex-col grow gap-1 justify-center items-center py-2 px-4">
                <label>Force</label>
                <span class="text-6xl">{{ force }}</span>

                <div class="flex flex-row gap-2 mt-4">
                    <UIButton @click="force--">👇</UIButton>
                    <UIButton @click="force++">👆</UIButton>
                </div>
            </div> 
        </div>

        <div class="flex flex-row justify-items-stretch gap-0">
            <div class="bg-dark text-light border flex flex-row grow gap-3 justify-center items-center py-2 px-4">
                <p>Built by <a class="text-accent font-bold" href="https://snisni.it">Mattia Sinisi</a></p>
            </div>
        </div>
    </div>
</template>