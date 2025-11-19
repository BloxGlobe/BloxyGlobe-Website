<script lang="ts">
  import Card from '$components/Card.svelte';
</script>

<h1 class="text-3xl font-bold mb-6">Dashboard</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card title="Users Online" value={123} />
  <Card title="Games Published" value={5} />
  <Card title="UGC Items" value={42} />
</div>
