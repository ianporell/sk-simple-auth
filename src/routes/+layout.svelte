<link rel="stylesheet" href="/css/layout.css"/>
<script>
    export let data;
</script>
<nav id="topbar">
    <h1>Logo</h1>
    {#if data.user}
        <p>logged in as {data.user.username}</p>
        <form action="/logout" method="POST">
            <input type="submit" value="logout"/>
        </form>
    {:else}
        <a href="/login">Log in</a>
    {/if}
</nav>
<div id="content">
    <slot />
</div>
