<script lang='ts'>
  export let data
</script>
<h1>Data Fetching</h1>
<p>data value: {data.data}</p>
<ul>
  {#each data.users as user}
    <li>{user.name} | {user.email} | {user.website}</li>
  {/each}
</ul>
