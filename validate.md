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
<style>
    .nysds-plus::before {
        content:"+";
        margin-right: 0.5rem;
    }
     .nysds-minus::before {
        content:"-";
        margin-right: 0.5rem;
    }
    </style>
<section  class="flex flex-col items-center m-auto mt-8 pb-8" x-data="">
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
                @click="$refs.removeservice.classList.toggle('hidden');$refs.addservice.classList.toggle('hidden') "
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm">
                    <span class="nysds-plus" x-ref="addservice"> add service </span> 
                    <span class="nysds-minus hidden" x-ref="removeservice"> remove service </span>
                </button>
                </div>
            </article>
    </div>        
    </div>
    <button class="p-4 bg-ny-blue text-white font-bold rounded-xl">Save these services</button>
</section>