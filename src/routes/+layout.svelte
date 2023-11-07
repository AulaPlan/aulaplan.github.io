<script>
  import Navbar from "$lib/Navbar.svelte";
  import "@fontsource/inter";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</svelte:head>

<Navbar />
<slot />
