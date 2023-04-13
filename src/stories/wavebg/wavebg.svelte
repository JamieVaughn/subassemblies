<script>
  export let height = 0
  export let fill = 'dodgerblue'
  export let layers = 1

  // refactor to pass in layers as an array of color values ['teal', 'turquoise']
  // so number is length and fill for each is finely tunable
</script>
<svg viewBox="0 0 500 200" {fill}>
  <!-- <path d={`M 0,${height+100} C 150,${height+200} 350,${height+0} 500,${height+100} L 500,00 L 0,0`}></path> -->
  <path d={`M 0 ${height+50} C 150 ${height+150} 300 ${height+0} 500 ${height+80} L 500 0 L 0 0`} ></path>
  <path class:hidden={layers < 2} d={`M 0 ${height+50} C 150 ${height+150} 330 ${height-30} 500 ${height+50} L 500 0 L 0 0`} fill='#0E7452' opacity="0.8"></path>
  <path class:hidden={layers < 3} d={`M 0 ${height+50} C 215 ${height+150} 250 ${height+0} 500 ${height+100} L 500 0 L 0 0`} opacity="0.5"></path>
</svg>

<style>
  .hidden {
    display: none;
  }
</style>