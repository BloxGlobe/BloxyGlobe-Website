<script lang="ts">
  export let headers: string[] = [];
  export let rows: any[][] = [];
</script>

<table class="min-w-full bg-gray-800 text-white rounded">
  <thead>
    <tr>
      {#each headers as header}
        <th class="px-4 py-2 text-left">{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr class="border-t border-gray-600">
        {#each row as cell}
          <td class="px-4 py-2">{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
