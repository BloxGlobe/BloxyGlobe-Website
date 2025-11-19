<script lang="ts">
  export let title: string;
  export let value: string | number;
</script>

<div class="bg-gray-700 text-white p-4 rounded shadow">
  <h2 class="text-lg font-bold">{title}</h2>
  <p class="text-2xl mt-2">{value}</p>
</div>
