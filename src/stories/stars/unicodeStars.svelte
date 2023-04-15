<script lang='ts'>
  let stars = [0, 1, 2, 3, 4, 5]
</script>

<fieldset class="star-rating">
  {#each stars as star}
    <input checked name="rating" value={star} type="radio" id={`rating${star}`}>
    <label for={`rating${star}`}>
      <span class="hide-visually">{star} Stars</span>
      <span aria-hidden="true" class="star">{star !== 0 ? '★' : ''}</span>
    </label>
  {/each}
</fieldset>

<style>
  .star-rating>label {
  -webkit-text-stroke: 2px black;
}

.star-rating input:checked~label>span.star,
.star-rating>label:hover~input~label>span.star{
  color: #fff;
}

.star-rating span.star,
.star-rating:hover>input+label>span.star,
.star-rating>input:checked+label>span.star,
.star-rating>input~label:hover>span.star{
  color: gold;
}

.star-rating>input~label:hover>span.star{
  color: orange;
}
.hide-visually,
.star-rating>input {
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px; 
  width: 1px;
  overflow: hidden;
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
}

.star-rating {
  font-size: 40px;
  display: inline-flex;
  padding: 0;
}

.star-rating:focus-within {
  outline: 3px solid #add8e6;
}

.star-rating label {
  cursor: pointer;
  line-height: 1em;
  text-align: center;
}

.star-rating label .star {
  height: 1em;
  width: 1em;
  display: inline-block;
}

.star-rating>label {
  -webkit-text-stroke: 2px black;
}

.star-rating input:checked~label>span.star,
.star-rating>label:hover~input~label>span.star {
  color: #fff;
}

.star-rating span.star,
.star-rating:hover>input+label>span.star,
.star-rating>input:checked+label>span.star,
.star-rating>input~label:hover>span.star {
  color: gold;
}

.star-rating>input~label:hover>span.star {
  color: orange;
}
</style>