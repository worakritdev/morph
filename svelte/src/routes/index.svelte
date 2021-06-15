<script>
  import Searchbox from '../lib/components/Searchbox.svelte';

    export let q = "";
    // your script goes here
    const searchIcon = `<svg class="h-8 w-8 text-indigo-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
</svg>
`;
</script>

<div class="container w-full h-full text-center">
   <Searchbox></Searchbox>

</div>

<!-- markup (zero or more items) goes here -->
<style>
    /* your styles go here */
</style>
