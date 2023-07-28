<script>
    export let data;
</script>

<main>
    {#if data.user}
		Logged in as: {data.user.username}
	{:else}
		<div class="button-container">
			<form action="?/login" method="POST">
                <input type="text" name="username"/>
				<button type="submit" class="btn btn-primary">Login</button>
			</form>
		</div>
	{/if}
</main>