<script>
  export let error;
  export let status;
</script>

<div class="flex flex-col items-center justify-center h-screen text-center text-white bg-gray-900">
  <h1 class="text-6xl font-bold">{status}</h1>
  <p class="text-xl mt-4">{error.message}</p>
  <a href="/" class="mt-6 text-blue-500 hover:underline">Go back home</a>
</div>
