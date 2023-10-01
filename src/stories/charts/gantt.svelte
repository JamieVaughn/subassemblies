<!-- GanttChart.svelte -->
<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  
  let tasks = [
    { name: "Task 1", start: new Date(2023, 8, 1), end: new Date(2023, 8, 5) },
    { name: "Task 2", start: new Date(2023, 8, 6), end: new Date(2023, 8, 20) },
    { name: "Task 3", start: new Date(2023, 8, 3), end: new Date(2023, 8, 4) },
    { name: "Task 4", start: new Date(2023, 8, 2), end: new Date(2023, 8, 12) },
    { name: "Task 5", start: new Date(2023, 8, 8), end: new Date(2023, 8, 11) },
    { name: "Task 6", start: new Date(2023, 8, 16), end: new Date(2023, 9, 1) },
    { name: "Task 7", start: new Date(2023, 8, 26), end: new Date(2023, 9, 10) },
  ];
  
  let svg;
  
  onMount(() => {
    // Create or update the Gantt chart when the component mounts
    createGanttChart();
  });
  
  function createGanttChart() {
    // Define your chart dimensions
    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };
  
    // Create an SVG element
    const chart = d3.select(svg).attr("width", width).attr("height", height);
    
    // Define scales for mapping data to the chart's coordinate system
    const xScale = d3
      .scaleTime()
      .domain([d3.min(tasks, (d) => d.start), d3.max(tasks, (d) => d.end)])
      .range([margin.left, width - margin.right]);
  
    const yScale = d3
      .scaleBand()
      .domain(tasks.map((task) => task.name))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);
  
    // Create Gantt bars
    chart
      .selectAll("rect")
      .data(tasks)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.start))
      .attr("y", (d) => yScale(d.name))
      .attr("width", (d) => xScale(d.end) - xScale(d.start))
      .attr("height", yScale.bandwidth())
      .attr("fill", "crimson");
  }
</script>

<svg bind:this={svg}></svg>

<style>

</style>