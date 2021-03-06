class nysdsIconFrame extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/gh/OGS-Digital-Service/digital-services-utilities@main/css/tailwind.css" rel="stylesheet" type="text/css" />
        <section class="flex flex-col">
            <p class="text-black mx-8 md:mx-20 justify-center self-center mb-4 max-w-2xl text-center">This is an area for a description of a few sentences. Something that serves to compliment and introduce the series of icons used here.</p>
            <div class="flex flex-row flex-wrap lg:flex-nowrap justify-center">
                <div class="my-4 mx-8 flex flex-col p-2 w-2/3 md:w-64">
                    <div class="mb-8 text-center">
                        <img class="m-auto object-scale-down max-h-36" src="/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png" alt="an outline of the state of new york" />
                    </div>
                    <h3 class="font-bold text-xl text-center !text-black mb-2">Icon Title</h3>
                    <p class="!text-black text-center">One really good decriptive sentence that shouldn't be terribly long.</p>
                </div>
                <div class="my-4 mx-8 flex flex-col p-2 w-2/3 md:w-64">
                    <div class="mb-8 text-center">
                        <img class="m-auto object-scale-down max-h-36" src="/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png" alt="an outline of the state of new york" />
                    </div>
                    <h3 class="font-bold text-xl text-center !text-black mb-2">Icon Title</h3>
                    <p class="!text-black text-center">One really good decriptive sentence that shouldn't be terribly long.</p>
                </div>
                <div class="my-4 mx-8 flex flex-col p-2 w-2/3 md:w-64">
                    <div class="mb-8 text-center">
                        <img class="m-auto object-scale-down max-h-36" src="/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png" alt="an outline of the state of new york" />
                    </div>
                    <h3 class="font-bold text-xl text-center !text-black mb-2">Icon Title</h3>
                    <p class="!text-black text-center">One really good decriptive sentence that shouldn't be terribly long.</p>
                </div>
                <div class="my-4 mx-8 flex flex-col p-2 w-2/3 md:w-64">
                    <div class="mb-8 text-center">
                        <img class="m-auto object-scale-down max-h-36" src="/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png" alt="an outline of the state of new york" />
                    </div>
                    <h3 class="font-bold text-xl text-center !text-black mb-2">Icon Title</h3>
                    <p class="!text-black text-center">One really good decriptive sentence that shouldn't be terribly long.</p>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <a
                    class="bg-admin-first !text-white visited:!text-white uppercase !no-underline hover:bg-black hover:!underline focus:bg-black focus:!underline mb-8 p-4 rounded-xl font-bold text-center m-auto lg:m-0 w-1/2 md:w-1/3 lg:w-1/4"
                    href="google.com"
                >
                    A CTA Link
                </a>
            </div>
        </section>
        `;
    }
  }
  customElements.define("nysds-iconframe", nysdsIconFrame);