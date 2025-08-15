<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($page.status === 404) {
			goto('/');
		}
	});
</script>

<div>
	{#if $page.status === 404}
		<p>페이지를 찾을 수 없습니다. 메인 페이지로 이동합니다...</p>
	{:else}
		<h1>{$page.status}</h1>
		<p>{$page.error?.message}</p>
	{/if}
</div>