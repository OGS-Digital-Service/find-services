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
{% from './_includes/_components.njk' import question, service %}
<section  class="m-auto mt-8 pb-8">
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <form 
        class="flex flex-col items-center justify-center"
        x-data="{ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: ''}" 
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
        type: "boolean",
        helptext: "Count yourself and any dependents when answering these questions."
    })
}}
{{
    question({
        question:"Does anyone in your home pay for dependent care?",
        qnum: "11",
        type: "boolean",
        helptext: "Dependent care is money you pay someone to care for children or other people in your home who are disabled or elderly, so you can work, look for work, or attend school."
    })
}}
{{
    question({
        question:"Is anyone pregnant?",
        qnum: "12",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone blind or disabled?",
        qnum: "13",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone an active member or honorably discharged veteran of the US Armed Forces?",
        qnum: "14",
        type: "boolean"
    })
}}
{{
    question({
        question:"Is anyone attending or planning to attend vocational school, college, or university either online or in person?",
        qnum: "15",
        type: "boolean"
    })
}}
 <div class="w-full flex justify-center">
        <button @click="resultsarea.hidden = false;$refs.results.scrollIntoView({behavior:'smooth'})" class="p-4 m-4 bg-ny-blue text-white rounded-xl font-bold hover:bg-black" id="seeServices"> See Your Services </button>
        </div>
        <div id="resultsarea" hidden x-ref="results" class="w-full md:w-2/3">
        {{
            service({
                service:"Child Care Subsidy Program",
                formula: "(q11 == 'yes' && (q6 * 12) <= (16140 + (q4 * 8840))) || (q8 == 'yes' && q9 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Unemployment Assistance",
                formula: "q1 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Supplemental Nutrition Assistance Program (SNAP)",
                formula: "((q11 == 'yes' || q13 == 'yes' || q7 == 'yes') && (q6 <= (2265 + ((q4 - 1) * 787)))) || ((q5 == 'yes') && (q6 <= (1699 + ((q4 -1) * 590)))) || ((q5 == 'no' && q13 == 'no' && q7 == 'no' && q11 == 'no') && (q6 <= (1473 + ((q4 - 1) * 511))))",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Home Energy Assistance Program (HEAP)",
                formula: "((q4 <= 6) && (q6 <= (2852 + ((q4 - 1) * 878)))) || ((q4 <= 11) && (q6 <= (7405 + ((q4 - 7) * 165)))) || ((q4 == '12') && (q6 <= 8228)) || ((q4 >= 13) && (q6 <= (8228 + ((q4 - 12) * 590))))",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Section 8 Housing Choice Voucher Program",
                formula: "(q2 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Paid Family Leave for Bonding",
                formula: "(q1 == 'no') && (q9 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Medicare",
                formula: "(q7 == 'yes') || (q13 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Women, Infants, and Children’s Program (WIC)",
                formula: "(q3 == 'yes') && (q9 == 'yes' || q12 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Disability Benefits Claim",
                formula: "(q13 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Adult Career and Continuing Education Services - Vocational Rehabilitation (ACCES-VR)",
                formula: "(q13 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Shared Work Program",
                formula: "(q1 == 'yes' && q5 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Child Health Plus",
                formula: "(q8 == 'yes' || q9 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Paid Family Leave for Family Care",
                formula: "(q1 == 'no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Paid Family Leave for Military Families",
                formula: "(q1 == 'no' && q14 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"NYS Tuition Assistance Program (TAP)",
                formula: "(q15 == 'yes') && (q6 < (80000/12))",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"New York State Veterans Blind Annuity Program",
                formula: "(q13 == 'yes' && q14 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Veteran Disability Compensation",
                formula: "(q13 == 'yes' && q14 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Aid for Part Time Study",
                formula: "(q15 == 'yes') && ((q6 * 12) < 50550)",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Find a COVID-19 Testing Site Near You",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"COVID-19 Quarantine Leave",
                formula: "(q10 == 'yes' && q5 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"New York State Domestic Violence and Sexual Violence Hotline",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Find a Job",
                formula: "q1 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Housing Resources During COVID-19",
                formula: "(q10 == 'yes' && q2 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Find a Food Bank Near You",
                formula: "q3 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"COVID-19 Emotional Support Helpline and Other Mental Health Resources",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"COVID-Related Health Insurance Information and Resources",
                formula: "q10 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Find Meals for Kids When Schools are Closed",
                formula: "(q3 == 'yes' && q8 == 'yes')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Accessing Addiction Services During COVID",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"COVID-19 resources for New Americans",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Find Diaper Assistance in Your Area",
                formula: "q12 == 'yes' || q9 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Temporary Assistance",
                formula: "q6 <= (1063 + ((q4 - 1) * 373))",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"File Your Taxes for Free Online",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Veterans Non-Service Connected Pension",
                formula: "q14 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Homeowner Assistance Fund",
                formula: "q2 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Emergency Rental Assistance Program",
                formula: "q2 == 'yes'",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        {{
            service({
                service:"Get a COVID-19 Vaccine",
                formula: "q1 == ('yes') || ('no')",
                description: "A brief description of this awesome service for you.",
                link:"https://ny.gov",
                linktext:"Add to List"
            })
        }}
        </div>
    </form>
</section>