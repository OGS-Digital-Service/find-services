---
layout: layout.njk
title: Find NYS Services
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
{% from './_includes/_components.njk' import question %}
<section  class="m-auto mt-8 pb-8">
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <form 
        class="flex flex-col items-center justify-center"
        x-data="{ q1: '', q2: '', q3: '', q4: ''}" 
        @submit.prevent>
{{
    question({
        question:"This is a yes no question",
        qnum: "1",
        type: "boolean"
    })
}}
{{
    question({
        question:"This is a question with currency input",
        qnum: "2",
        type: "currency"
    })
}}
{{
    question({
        question:"This is a question with a number input",
        qnum: "3",
        type: "number"
    })
}}
{{
    question({
        question:"This is a yes no question",
        qnum: "4",
        type: "boolean"
    })
}}
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
</section>