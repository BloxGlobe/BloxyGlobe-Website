<script lang="ts">
  import { sidebarOpen } from '$stores';
  import { onMount } from 'svelte';
  let open = true;
  sidebarOpen.subscribe(value => open = value);
</script>

<div class={`bg-gray-800 text-white w-64 p-4 h-screen ${open ? 'block' : 'hidden'}`}>
  <h1 class="text-2xl font-bold mb-4">BloxGlobe</h1>
  <nav class="flex flex-col space-y-2">
    <a href="/" class="hover:bg-gray-700 p-2 rounded">Dashboard</a>
    <a href="/analytics" class="hover:bg-gray-700 p-2 rounded">Analytics</a>
    <a href="/assets" class="hover:bg-gray-700 p-2 rounded">Assets</a>
    <a href="/settings" class="hover:bg-gray-700 p-2 rounded">Settings</a>
    <a href="/profile" class="hover:bg-gray-700 p-2 rounded">Profile</a>
  </nav>
</div>
