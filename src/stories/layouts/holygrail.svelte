
<div class="wrap">
  <header class="page-header">
    <slot name='header'>header</slot>
  </header>
  <nav>
    <slot name='nav'>nav</slot>
  </nav>
  <main>
    <article>
      <slot name='main'>main</slot>
    </article>
  </main>
  <aside>
    <slot name='aside'>aside</slot>
  </aside>
  <footer>
    <slot name='footer'>footer</slot>
  </footer>
</div>

<style>
  /* min-height: 100vh; */
.wrap {
  box-shadow: 0 0 3px rgba(black, 0.33);
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr) minmax(10px, 1fr);
  grid-template-rows: min-content min-content 1fr min-content;
  gap: 1px;
  background-color: silver;
}
.wrap > * {
    padding: 1rem;
    text-align: center;
    background-color: white;
  }
@media (max-width: 600px) {
  .wrap {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
  .wrap > * {
    grid-column: 1 / -1 !important;
    grid-row: auto !important;
  }
}
header {
  grid-column: 1 / -1;
}
nav {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
aside {
  grid-column: 3 / 4;
  grid-row: 2 / 4;
}
main {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}
footer {
  grid-column: 1 / -1;
}
</style>