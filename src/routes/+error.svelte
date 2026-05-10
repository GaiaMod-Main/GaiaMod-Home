<script>
    import { page } from "$app/stores";

    // Components
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";

</script>

<head>
    <title>GaiaMod - {$page.status}</title>
</head>

<NavigationBar />
<NavigationMargin />

<div class="center-div">
    <h1>Uh-Oh!</h1>
    <p>
        There is this page that doesn't exist! You should <a href="../">go back</a> to be safe.<br>
    </p>

    <p>Error: {$page.status} - {$page.error.message}</p>
</div>

<style>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .center-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    :global(body.dark-mode) {
        color: white;
    }
    :global(body.dark-mode) a {
        color: dodgerblue;
    }
</style>