<script lang="ts">
  import Sidebar from '$components/Sidebar.svelte';
  import Topbar from '$components/Topbar.svelte';
</script>

<div class="flex">
  <Sidebar />
  <div class="flex-1 flex flex-col">
    <Topbar />
    <main class="p-6 bg-gray-900 min-h-screen text-white">
      <slot />
    </main>
  </div>
</div>
