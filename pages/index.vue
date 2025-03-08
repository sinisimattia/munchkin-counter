<template>
    <div class="flex justify-center items-center h-screen bg-light text-dark">
        <div class="flex flex-col items-center gap-0">
            <h1 class="text-7xl text-center font-bold">Munchkin Tracker</h1>
            <span>by <a class="text-accent font-bold" href="https://snisni.it">Mattia Sinisi</a></span>

            <NuxtLink
                to="/game"
                class="
                    inline-block
                    bg-dark
                    text-light
                    py-2 px-4
                    mt-10
                    text-center
                    rounded-lg
                    shadow-lg
                    text-4xl
                "
            >
                Start
            </NuxtLink>
        </div>
    </div>
</template>