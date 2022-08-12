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
<section  class="flex flex-col items-center m-auto mt-8 pb-8">
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <div class="my-4 w-full md:w-2/3" >
    <form 
        x-data="{ q1: '', q2: '', q3: '', q4: ''}" 
        @submit.prevent>
        <fieldset><!-- start a question -->
            <legend>This is a yes no question</legend>
            <p class="text-red-600 border-red-800" 
                :hidden="true" 
                id="q1error" 
                x-ref="q1error"
                x-cloak>Please answer "Yes" or "No"</p>
            <div 
                class="flex flex-row items-center border border-ny-blue-second my-2 pl-4 rounded-xl" 
                @click="$refs.q1no.classList.remove('bg-ny-light');$el.classList.add('bg-ny-light');$refs.q1error.hidden = true" 
                x-ref="q1yes" >
                <input 
                    type="radio" 
                    value="yes" 
                    x-model.lazy="q1" 
                    id="q1-yes"  
                    required 
                    oninvalid="q1error.hidden = false;resultsarea.hidden = true"
                    tabindex="0" 
                    />
                <label 
                    for="q1-yes" 
                    class="w-full p-4">Yes</label>
            </div>
            <div 
                class="flex flex-row items-center border border-ny-blue-second my-2 pl-4 rounded-xl" 
                @click="$refs.q1yes.classList.remove('bg-ny-light');$el.classList.add('bg-ny-light');$refs.q1error.hidden = true" 
                x-ref="q1no">
                <input 
                    type="radio" 
                    value="no" 
                    x-model.lazy="q1" 
                    id="q1-no" 
                    required /> 
                <label 
                    for="q1-no" 
                    class="w-full p-4">No</label>
            </div>
        </fieldset><!-- END a question -->
        <fieldset><!-- start a question -->
            <legend>This is a yes no question number 2</legend>
            <p class="text-red-600 border-red-800" 
                :hidden="true" 
                id="q2error" 
                x-ref="q2error" 
                x-cloak>Please answer "Yes" or "No"</p>
            <div 
                class="flex flex-row items-center border border-ny-blue-second my-2 pl-4 rounded-xl" 
                @click="$refs.q2no.classList.remove('bg-ny-light');$el.classList.add('bg-ny-light');$refs.q2error.hidden = true" 
                x-ref="q2yes" >
                <input 
                    type="radio" 
                    value="yes" 
                    x-model.lazy="q2" 
                    id="q2-yes"  
                    required 
                    oninvalid="q2error.hidden = false; resultsarea.hidden = true"/> 
                <label 
                    for="q2-yes" 
                    class="w-full p-4">Yes</label>
            </div>
            <div 
                class="flex flex-row items-center border border-ny-blue-second my-2 pl-4 rounded-xl" 
                @click="$refs.q2yes.classList.remove('bg-ny-light');$el.classList.add('bg-ny-light');$refs.q2error.hidden = true" 
                x-ref="q2no">
                <input 
                    type="radio" 
                    value="no" 
                    x-model.lazy="q2" 
                    id="q2-no" 
                    required /> 
                <label 
                    for="q2-no" 
                    class="w-full p-4">No</label>
            </div>
        </fieldset><!-- END a question -->
        <div class="w-full flex justify-center">
        <button @click="resultsarea.hidden = false;$refs.results.scrollIntoView({behavior:'smooth'})" class="p-4 m-4 bg-ny-blue text-white rounded-xl font-bold hover:bg-black" id="seeServices"> See Your Services </button>
        </div>
        <div id="resultsarea" hidden x-ref="results">
        <template x-if="q1 == 'yes'">
            <article class="flex bg-gray-300 rounded-xl border-gray-600 border p-4 m-4">
                <div class="w-2/3">
                <h3 class="font-bold text-2xl">Service for Q1</h3>
                <p> A brief description of this awesome service for you. </p>
                </div>
                <div class="w-1/3 flex justify-center">
                <a href="google.com" class="p-4 bg-ny-blue text-white font-bold rounded-xl"> A link to the service </a>
                </div>
            </article>
        </template>
        <template x-if="q2 == 'yes'">
            <article class="flex bg-gray-300 rounded-xl border-gray-600 border p-4 m-4">
                <div class="w-2/3">
                <h3 class="font-bold text-2xl">Service for Q2</h3>
                <p> A brief description of this awesome service for you. </p>
                </div>
                <div class="w-1/3 flex justify-center">
                <a href="google.com" class="p-4 bg-ny-blue text-white font-bold rounded-xl"> A link to the service </a>
                </div>
            </article>
        </template>
        </div>
    </form>
    </div>
    <button class="p-4 bg-ny-blue text-white font-bold rounded-xl">Save these services</button>
</section>