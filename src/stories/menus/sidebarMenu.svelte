<script lang="ts">
  import logo from '$lib/images/svelte-logo.svg'
  export let username = 'John Doe';
  export let occupation = 'Developer';
  export let mainContent = 'Main Content'
  export let options = [
    {name: 'Home', icon: 'home'}, 
    {name: 'My Dashboard', icon: 'desktop'},
    {name: 'People', icon: 'users'},
    {name: 'Performance', icon: 'gauge'}, 
    {name: 'Development', icon: 'database'},
    {name: 'Admin', icon: 'user-gear'},
    {name: 'Reports', icon: 'chart-line-up'},
    {name: 'Settings', icon: 'gear'},
  ]

  let active = 'Home'
	let open = false;
</script>

<div class="wrapper" class:open>
	<div class="section">
		<div class="top_navbar">
			<div class="hamburger">
				<a href="#" on:click={(e) => (e.preventDefault, (open = !open))}> ≡ </a>
			</div>
		</div>
		<main>{mainContent}</main>
	</div>

	<!--Top menu -->
	<aside class="sidebar">
		<!--profile image & text-->
		<div class="profile">
			<img
				src={logo}
				alt="profile_picture"
			/>
			<h3>{username}</h3>
			<p>{occupation}</p>
		</div>
		<!--menu item-->
		<ul>
      {#each options as option}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={() => active = option.name}>
          <a href="#" class:active={active === option.name}>
            <img src={`/src/stories/assets/${option.icon}.svg`} alt={option.icon + ' icon'}/>
            <span class="item">{option.name}</span>
          </a>
        </li>
      {/each}
		</ul>
	</aside>
</div>

<style lang="postcss">
	* {
		list-style: none;
		text-decoration: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.wrapper .sidebar {
		background: rgb(5, 68, 104);
		position: fixed;
		top: 0;
		left: 0;
		width: 225px;
		height: 100%;
		padding: 20px 0;
		transition: all 0.5s ease;
	}
	.wrapper .sidebar .profile {
		margin-bottom: 30px;
		text-align: center;
	}

	.wrapper .sidebar .profile img {
		display: block;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin: 0 auto;
	}

	.wrapper .sidebar .profile h3 {
		color: #ffffff;
		margin: 10px 0 5px;
	}

	.wrapper .sidebar .profile p {
		color: rgb(206, 240, 253);
		font-size: 14px;
	}
	.wrapper .sidebar ul li a {
		display: flex;
    align-items: center;
    gap: 0 4px;
		padding: 13px 30px;
		border-bottom: 1px solid #10558d;
		color: rgb(241, 237, 237);
		font-size: 16px;
		position: relative;
	}

	.wrapper .sidebar ul li a:hover,
	.wrapper .sidebar ul li a.active {
		color: #0c7db1;

		background: white;
		border-right: 2px solid rgb(5, 68, 104);
	}

	.wrapper .sidebar ul li a:hover:before,
	.wrapper .sidebar ul li a.active:before {
		display: block;
	}

	/* section nav bar */

	.wrapper .section .top_navbar {
		background: rgb(7, 105, 185);
		height: 50px;
		display: flex;
		align-items: center;
		padding: 0 30px;
	}

	.wrapper .section .top_navbar .hamburger a {
		font-size: 28px;
		color: #f4fbff;
	}

	.wrapper .section .top_navbar .hamburger a:hover {
		color: #a2ecff;
	}

	.wrapper.open .sidebar {
		left: 0px;
	}
	.wrapper .sidebar {
		left: -225px;
	}

	.wrapper .section {
		margin-left: 0;
		width: 100%;
		transition: all 0.5s ease;
	}

	.wrapper.open .section {
		width: calc(100% - 225px);
		margin-left: 225px;
	}
</style>
