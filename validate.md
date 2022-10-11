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
<section  class="flex flex-col items-center m-auto mt-8 pb-8" @click="alert('Hello World!')">
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <div class="my-4 w-full md:w-2/3" >
      <article class="flex bg-gray-300 rounded-xl border-gray-600 border p-4 m-4">
                <div class="w-2/3">
                <h3 class="font-bold text-2xl">Service Name</h3>
                <p> Service description!</p>
                </div>
                <div class="w-1/3 flex justify-center items-center">
                <button 
                type="button"
                @click="alert('Hello World!')"
                class="p-4 bg-ny-blue text-white tracking-widest font-bold rounded-xl uppercase text-sm nysds-plus">add service </button>
                </div>
            </article>
    </div>
    <button class="p-4 bg-ny-blue text-white font-bold rounded-xl">Save these services</button>
</section>