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
<script>
    function serviceForm(){
        return {

        }
    }
</script>
<section x-data="{ q1: '', q2: '', q3: '', q4: ''}" class="flex flex-col items-center m-auto mt-8 pb-8">
    <!-- data wrap -->
    <h1 class="nysds-text-36 font-extrabold mb-4 w-full text-center">Find Services</h1>
    <div class="my-4 w-full md:w-2/3" >
    <form>
        <fieldset x-data="{ q1validate: false, q2validate: true  }" >
            <legend>This is a yes no question</legend>
            <p class="text-red-600" :hidden="q1validate">this is required</p>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1no.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third')" x-ref="q1yes">
                <input type="radio" value="yes" x-model.lazy="q1" id="q1-yes" @blur="q1validate == false" @click="q1validate = true" :aria-invalid="q1validate"  /> 
                <label for="q1-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1yes.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third')" x-ref="q1no">
                <input type="radio" value="no" x-model.lazy="q1" id="q1-no" @blur="q1validate" :aria-invalid="q1validate" /> 
                <label for="q1-no" class="w-full p-4">No</label>
            </div>
        </fieldset>
        <button> Submit </button>
    </form>
    </div>
</section>
