<script lang="ts">
  export let max = 5
	let stars = Array.from({length: max}).map((_, i) => i+1)
</script>

<fieldset 
class="star-rating"
style={`--max-stars: ${max}`}>
	<legend>Your rating:</legend>
	<div>
		{#each stars as star}
			<input type="radio" name="rating" value={star} id={`rating${star}`} />
			<label for={`rating${star}`}><span>{star}</span></label>
		{/each}
	</div>
</fieldset>

<style>
	:root {
		--star-rating-size: 5rem;
		--unchecked-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cpath fill='%23fff' stroke='%23666' d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/%3e%3c/svg%3e");
		--checked-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cpath fill='gold' stroke='%23666' stroke-width='2' d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/%3e%3c/svg%3e");
		--hovered-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cpath fill='red' stroke='%23fff' stroke-width='2' d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/%3e%3c/svg%3e");
	}

	.star-rating {
		width: min-content;
		padding: 0.3rem;
	}

	.star-rating > div {
		position: relative;
		height: var(--star-rating-size);
		width: calc(var(--star-rating-size) * var(--max-stars));
		background-image: var(--unchecked-image);
		background-size: var(--star-rating-size) var(--star-rating-size);
	}

	.star-rating label {
		position: absolute;
		height: 100%;
		background-size: var(--star-rating-size) var(--star-rating-size);
	}

	.star-rating label:nth-of-type(1) {
		z-index: 10;
		width: calc(100% / var(--max-stars) * 1);
	}

	.star-rating label:nth-of-type(2) {
		z-index: 9;
		width: calc(100% / var(--max-stars) * 2);
	}

	.star-rating label:nth-of-type(3) {
		z-index: 8;
		width: calc(100% / var(--max-stars) * 3);
	}

	.star-rating label:nth-of-type(4) {
		z-index: 7;
		width: calc(100% / var(--max-stars) * 4);
	}

	.star-rating label:nth-of-type(5) {
		z-index: 6;
		width: calc(100% / var(--max-stars) * 5);
	}

	.star-rating label:nth-of-type(6) {
		z-index: 5;
		width: calc(100% / var(--max-stars) * 6);
	}

	.star-rating label:nth-of-type(7) {
		z-index: 4;
		width: calc(100% / var(--max-stars) * 7);
	}

	.star-rating label:nth-of-type(8) {
		z-index: 3;
		width: calc(100% / var(--max-stars) * 8);
	}

	.star-rating label:nth-of-type(9) {
		z-index: 2;
		width: calc(100% / var(--max-stars) * 9);
	}

	.star-rating label:nth-of-type(10) {
		z-index: 1;
		width: calc(100% / var(--max-stars) * 10);
	}

	.star-rating input:checked + label,
	.star-rating input:focus + label {
		background-image: var(--checked-image);
	}
	.star-rating input:checked + label:hover,
	.star-rating label:hover {
		background-image: var(--hovered-image);
	}

	.star-rating > div:focus-within {
		outline: 0.25rem solid lightblue;
	}

	.star-rating input,
	.star-rating label > span {
		border: 0;
		padding: 0;
		margin: 0;
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(
			1px 1px 1px 1px
		); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
		clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
		clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
		white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
	}
</style>
