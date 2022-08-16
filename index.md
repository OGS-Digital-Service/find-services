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
        x-data="{ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '',  q16: ''}" 
        @submit.prevent>
{{
    question({
        question:"Are you unemployed, furloughed, or working reduced hours?",
        qnum: "1",
        type: "boolean"
    })
}}
{{
    question({
        question:"Are you having trouble paying for your rent, mortgage, or home maintenance fees?",
        qnum: "2",
        type: "boolean"
    })
}}
{{
    question({
        question:"Are you having trouble purchasing enough food to feed yourself or your family?",
        qnum: "3",
        type: "boolean"
    })
}}
{{
    question({
        question:"How many people live with you? Include yourself.",
        qnum: "4",
        type: "number",
        helptext:"Count yourself, other adults and any dependents when answering these questions."
    })
}}
{{
    question({
        question:"Is anyone in your home employed?",
        qnum: "5",
        type: "boolean"
    })
}}
{{
    question({
        question:"What’s the total amount of money (unearned income and earned income before taxes) that everyone in your home made in the last 30 days?",
        qnum: "6",
        type: "currency"
    })
}}
{{
    question({
        question:"Is anyone aged 60 or older?",
        qnum: "7",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone 6–17 years old?",
        qnum: "8",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone 5 years old or younger?",
        qnum: "9",
        type: "boolean"
    })
}}
{{
    question({
        question:"Has anyone been diagnosed with COVID-19?",
        qnum: "10",
        type: "boolean"
    })
}}
{{
    question({
        question:"This is a question with a number input",
        qnum: "11",
        type: "boolean",
        helptext: "Count yourself and any dependents when answering these questions."
    })
}}
{{
    question({
        question:"Does anyone in your home pay for dependent care?",
        qnum: "12",
        type: "boolean",
        helptext: "Dependent care is money you pay someone to care for children or other people in your home who are disabled or elderly, so you can work, look for work, or attend school."
    })
}}
{{
    question({
        question:"Is anyone pregnant?",
        qnum: "13",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone blind or disabled?",
        qnum: "14",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone an active member or honorably discharged veteran of the US Armed Forces?",
        qnum: "15",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone attending or planning to attend vocational school, college, or university either online or in person?",
        qnum: "16",
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