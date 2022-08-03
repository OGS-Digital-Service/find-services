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
<section x-data="{ q1: '', q2: '', q3: ''}" class="flex flex-col items-center m-auto mt-8 pb-8"> <!-- data wrap -->
<h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>

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
</section>