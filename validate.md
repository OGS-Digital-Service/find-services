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
        x-data="{ q1: '', q2: '', q3: '', q4: '', results: false, anyerror: false}" 
        @submit.prevent>
        <fieldset>
            <legend>This is a yes no question</legend>
            <p class="text-red-600 border-red-800" 
                :hidden="true" 
                id="q1error" 
                x-ref="q1error" 
                x-cloak>Please answer "Yes" or "No"</p>
            <div 
                class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" 
                @click="$refs.q1no.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q1error.hidden = true" 
                x-ref="q1yes" >
                <input 
                    type="radio" 
                    value="yes" 
                    x-model.lazy="q1" 
                    id="q1-yes"  
                    required 
                    oninvalid="q1error.hidden = false; q1error.dataset.error = true"/> 
                <label 
                    for="q1-yes" 
                    class="w-full p-4">Yes</label>
            </div>
            <div 
                class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" 
                @click="$refs.q1yes.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third');$refs.q1error.hidden = true" 
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
        </fieldset>
        <div class="w-full flex justify-center">
        <button @click=" results = ! results" class="p-4 m-4 bg-admin-first text-white rounded-xl font-bold hover:bg-black"> See Your Services </button>
        </div>
        <template x-if="results">
        <template x-if="q1 == 'yes'">
            <article class="">
                Service for Q1</article>
        </template>
        </template>
    </form>
    </div>
</section>


<!-- <div x-data="page()" class="flex flex-col md:w-1/3">
  <button @click="access()" class="mt-10 md:mt-32 w-2/3 justify-center flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Access Data
  </button>
  <label class="block">Output: "<span x-ref="output">Hello world</span>"</label>
  <script type="text/javascript">
    function page() {
      return {
        message: "Hello world??????",
        access() {
          this.$refs.output.innerText = this.message;
        },
      };
    }
  </script>
</div> -->