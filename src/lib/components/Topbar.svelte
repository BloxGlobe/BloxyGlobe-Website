<script lang="ts">
  import { sidebarOpen, darkMode } from '$stores';
</script>

<div class="bg-gray-900 text-white flex justify-between p-4 items-center">
  <button on:click={() => sidebarOpen.update(v => !v)}>Toggle Sidebar</button>
  <button on:click={() => darkMode.update(v => !v)}>Toggle Dark Mode</button>
</div>
