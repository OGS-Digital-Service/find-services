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




<div
    x-data="{
        search: '',
        items: ['foo', 'bar jh', 'baz'],
        get filteredItems() {
            return this.items.filter(
                i => i.includes(this.search)
            )
        }
    }"
>
    <input x-model="search" placeholder="Search...">
    <ul>
        <template x-for="item in filteredItems" :key="item">
            <li x-text="item"></li>
        </template>
    </ul>
</div>
