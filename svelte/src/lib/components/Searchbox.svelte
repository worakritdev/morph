<script context="module">
    const API = import.meta.env.VITE_API;
    export async function load({ fetch }) {
        const res = await fetch(`${API}`);
    }
</script>

<script>
    export let q = "";
    // your script goes here
    const searchIcon = `<svg class="h-8 w-8 text-indigo-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
</svg>
`;

    export let strs;

    strs = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        { name: "wor", detail: "woraza" },
        { name: "wrars" },
    ];
    let result;
    $: {
        result = strs.find((str) => str === q);
    }
</script>

{JSON.stringify(result)}
<section>
    <input
        type="search"
        bind:value={q}
        placeholder="Search . . . 🔍"
        name="q"
        class="text-xl placeholder-gray-500 p-2 m-2 shadow-md drop-shadow-md outline-none  focus:animate-none"
    />
</section>

<style>
    /* your styles go here */
</style>
