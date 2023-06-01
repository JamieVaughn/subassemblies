<script lang='ts'>
  export let hp = 10
  let currentHp = 50
  let gap = 4
  let text
  let inner
  let maxHealthInput

  const x = 100 * Math.cos(((100 / hp / 100) * 360 - gap - 180) * (Math.PI / 180));
  const y = 100 * Math.sin(((100 / hp / 100) * 360 - gap - 180) * (Math.PI / 180));
  const largeArc = (100 / hp) > 50 ? 1 : 0;

  function getSectionRotation(index: number) {
    return (360 / hp) * index;
  }
</script>

<div class="health-bar">
  <svg width="200" height="200" viewBox="0 0 200 200">
    <g bind:this={inner} transform="translate(100,100)">
      <!-- generated health bar sections will go here -->
      {#each Array.from({ length: hp }) as _, i}
      <path 
      class="health-bar__section" 
      transform={`rotate(${getSectionRotation(i)}, 0, 0)`} 
      d={`M0 0 -100 0 A${100} ${100} 0 ${largeArc} 1 ${x} ${y} Z`} 
      fill="#fff" 
      stroke="#fff"
      stroke-width="5"
       />
      {/each}
    </g>
    <circle cx="100" cy="100" r="90" fill="#222222" />
  </svg>

  <p bind:this={text}>{currentHp}</p>
</div>

<!-- Demo stuff -->
<div class="ui-wrapper">
  <div>
    <button  on:click={() => currentHp > 0 ? currentHp-- : null}>Wound</button>
    <button on:click={() => currentHp < hp ? currentHp++ : null}>Heal</button>
  </div>
  <div>
    <label for="maxHealthInput">Maximum Health: <span bind:this={text} id='text'>{currentHp}</span></label>
    <input class="slider" name="maxHealthInput" type="range" min="2" max="100" value="5" bind:this={maxHealthInput}>

    <label for="healthBarSectionGapInput">Health Bar Section Gap: <span id="healthBarSectionGapText">{gap}</span></label>
    <input class="slider" name="healthBarSectionGapInput" type="range" max="20" value="4" id="healthBarSectionGapInput" on:input={e => gap = e.target.value}>
  </div>
</div>

<style lang='postcss'>

.health-bar {
  position: relative;
  display: block;
  margin: auto;
  max-width: 200px;
}

#text {
  font-family: "Arial", sans;
  font-weight: black;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 3rem;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Demo Stuff */
.ui-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 3rem auto 0 auto;
}

input,
label {
  font-family: "Arial", sans;
  font-size: 1.1rem;
  font-weight: black;
  color: white;
  display: block;
  margin-bottom: 0.5rem;
}

label {
  text-align: right;
}

input {
  margin-left: auto;
}

button {
  cursor: pointer;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

</style>