---
layout: layout.njk
title: validate
url: 
domain: 
facebook:
    title:  Find NYS Services
    description: Find NYS Services
    image: nygov-logo.png
twitter:
    title: Find NYS Services
    description: Find NYS Services
    image: nygov-logo.png
---
<section  class="flex flex-col items-center m-auto mt-8 pb-8" x-data="{count:''}">
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <div id="resultsarea"  x-ref="results" class="w-full md:w-2/3">
    <div class="flex flex-col">
      <article class="flex bg-gray-300 rounded-xl border-gray-600 border p-4 m-4">
                <div class="w-2/3">
                <h3 class="font-bold text-2xl">Service Name 1</h3>
                <p> Service description!</p>
                </div>
                <div class="w-1/3 flex justify-center items-center">
                <button 
                type="button"
                x-ref="q1add"
                @click="count++;$el.classList.toggle('hidden');$refs.q1remove.classList.toggle('hidden')"
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm nysds-plus">
                    add service
                </button>
                <button 
                type="button"
                x-ref="q1remove"
                @click="count--;$el.classList.toggle('hidden');$refs.q1add.classList.toggle('hidden') "
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm nysds-minus hidden">
                   remove service
                </button>
                </div>
            </article>
      <article class="flex bg-gray-300 rounded-xl border-gray-600 border p-4 m-4">
                <div class="w-2/3">
                <h3 class="font-bold text-2xl">Service Name 1</h3>
                <p> Service description!</p>
                </div>
                <div class="w-1/3 flex justify-center items-center">
                <button 
                type="button"
                x-ref="q2add"
                @click="count++;$el.classList.toggle('hidden');$refs.q2remove.classList.toggle('hidden')"
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm nysds-plus">
                    add service
                </button>
                <button 
                type="button"
                x-ref="q2remove"
                @click="count--;$el.classList.toggle('hidden');$refs.q2add.classList.toggle('hidden') "
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm nysds-minus hidden">
                   remove service
                </button>
                </div>
            </article>      
    </div>        
    </div>
    <template x-if="count > 0">
        <button class="p-4 bg-ny-blue text-white font-bold rounded-xl">
            Save these 
            <template x-if="count > 0">
            <span x-text="count"></span>
            </template>
            services
        </button>
    </template>
</section>