<script lang='ts'>
  let points = [1, 2, 3, 4, 5]
</script>

<div class="stars">
  {#each points as point}
    <input type="radio" name="rating" value={point} />
  {/each}
  <i></i>
</div>

<style>
.stars {
  display:inline-grid;
  width: 300px;
  aspect-ratio:1/1;
  height:300px; /* to support old browsers */
}
.stars input {
  grid-area:1/1;
  height:100%;
  width:100%;
  margin:0;
  opacity:0;
  cursor:pointer;
  clip-path: polygon(49% 0,calc(50% + 0.2245*50%) calc(0.691*50%),50% 50%,calc(50% - 0.2245*50%) calc(0.691*50%));
  
}
.stars input:nth-of-type(2) {transform:rotate(72deg)}
.stars input:nth-of-type(3) {transform:rotate(144deg)}
.stars input:nth-of-type(4) {transform:rotate(216deg)}
.stars input:nth-of-type(5) {transform:rotate(288deg)}

.stars i {
  grid-area:1/1;
  pointer-events:none;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 56%, 79% 91%, 50% 70%, 21% 91%, 32% 56%, 2% 35%, 39% 35%);
  background:
    conic-gradient(from -36deg,rgba(255,0,0,var(--o,0.3)) calc(var(--l,0)*72deg),#0000 0),
    conic-gradient(from -36deg,gold                       calc(var(--p,0)*72deg),#0000 0),
    #ccc;
}



.stars:focus-within {
  filter:drop-shadow(0 0 2px #000);
}

input:active ~ i{--o:1}

input:nth-of-type(1):checked ~ i {--p:1}
input:nth-of-type(2):checked ~ i {--p:2}
input:nth-of-type(3):checked ~ i {--p:3}
input:nth-of-type(4):checked ~ i {--p:4}
input:nth-of-type(5):checked ~ i {--p:5}

input:nth-of-type(1):hover ~ i {--l:1}
input:nth-of-type(2):hover ~ i {--l:2}
input:nth-of-type(3):hover ~ i {--l:3}
input:nth-of-type(4):hover ~ i {--l:4}
input:nth-of-type(5):hover ~ i {--l:5}
</style>