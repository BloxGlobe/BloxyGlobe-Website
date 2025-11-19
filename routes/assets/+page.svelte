<script lang="ts">
  import Table from '$components/Table.svelte';

  let headers = ['ID', 'Name', 'Type', 'Status'];
  let rows = [
    [1, 'Item A', 'UGC', 'Active'],
    [2, 'Item B', 'UGC', 'Inactive']
  ];
</script>

<h1 class="text-3xl font-bold mb-6">Assets</h1>

<Table {headers} {rows} />
