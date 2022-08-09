---
layout: layout.njk
title: method
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
    <form x-data="{ q1: '', q2: '', q3: '', q4: ''}" @submit.prevent>
        <fieldset>
            <legend>This is a yes no question</legend>
            <p class="text-red-600 border-red-800" :hidden="true" id="q1error" x-ref="q1error" x-cloak>error!</p>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1no.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q1error.hidden = true" x-ref="q1yes" >
                <input type="radio" value="yes" x-model.lazy="q1" id="q1-yes"  required oninvalid="q1error.hidden = false" /> 
                <label for="q1-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1yes.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q1error.hidden = true" x-ref="q1no">
                <input type="radio" value="no" x-model.lazy="q1" id="q1-no" required /> 
                <label for="q1-no" class="w-full p-4">No</label>
            </div>
        </fieldset>
        <fieldset>
            <legend>This is a yes no question</legend>
            <p class="text-red-600 border-red-800" :hidden="true" id="q2error" x-ref="q2error" x-cloak>error!</p>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q2no.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q2error.hidden = true" x-ref="q2yes" >
                <input type="radio" value="yes" x-model.lazy="q2" id="q2-yes"  required oninvalid="q2error.hidden = false" /> 
                <label for="q2-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q2yes.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q2error.hidden = true" x-ref="q2no">
                <input type="radio" value="no" x-model.lazy="q2" id="q2-no" required /> 
                <label for="q2-no" class="w-full p-4">No</label>
            </div>
        </fieldset>
        <button> Submit </button>
    </form>
    </div>
</section>