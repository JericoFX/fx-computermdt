<script lang="ts">
	import {fade} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	export let message = '';
	export let open = false;
	export let location = '';
	export let openTime = 5000;
	export let typeOfDispatch = '';
	let app = setTimeout(() => {
		open = false;
		message = '';
		location = '';
		typeOfDispatch = '';
		clear();
		deleteTime();
	}, openTime);
	function deleteTime() {
		clearTimeout(app);
	}
	function clear() {
		open = false;
		dispatch('closeNoti');
	}
</script>

{#if open}
	<div transition:fade>
		<main>
			<div class="container absolute-top-right q-mt-md q-mr-md">
				<div class="backgroundbox">
					<div class="containerbox absolute-center">
						<div class="bigbar absolute-center" style:top="15%">
							<div class="text full-width ">
								<span class="text-center absolute-center">NEW {typeOfDispatch.toUpperCase()}</span>
							</div>
						</div>
						<div class="smallbar absolute-center" style:top="50%">
							<span class="smalltext absolute"> Location: {location} </span>
							<img class="on-left ic" src="iconos/gps.png" style:width="14px" alt="nose" />
						</div>
						<div class="smallbar absolute-center" style:top="80%">
							<span class="smalltext absolute"> Message: {message} </span>
							<img class="on-left ic" src="iconos/message.png" alt="nose" style:width="14px" />
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
{/if}

<style>
	.container {
		z-index: 9999;
	}
	.backgroundbox {
		width: 17.291666666666668vw;
		height: 11.030176899063475vh;
		background: rgba(23, 23, 23, 0.8);
		border-radius: 2px;
		animation-name: example;
		animation-duration: 4s;
		animation-iteration-count: 3;
	}
	.containerbox {
		width: 16.927083333333332vw;
		height: 10.40582726326743vh;
		background: rgba(68, 68, 68, 0.72);
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.74);
		border-radius: 2px;
	}
	.bigbar {
		width: 16.458333333333332vw;
		height: 2.705515088449532vh;
		background: rgba(23, 23, 23, 0.8);
		border-bottom: 1px solid #000000;
		box-shadow: 0px 0px 4px #000000;
		border-radius: 2px;
	}
	.text {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: center;

		color: #ededed;

		text-shadow: 0px 4px 4px #000000;
	}
	.smallbar {
		width: 16.458333333333332vw;
		height: 2.2892819979188346vh;

		background: rgba(23, 23, 23, 0.8);
		border-top: 1px solid #000000;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.91);
		border-radius: 2px;
	}
	@keyframes example {
		0% {
			background-color: red;
		}
		25% {
			background-color: blue;
		}
		50% {
			background-color: red;
		}
		75% {
			background-color: blue;
		}
		100% {
			background-color: red;
		}
	}
	.smallbar span {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		display: flex;
		align-items: center;
		padding-left: 30px;
		color: #ededed;

		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.ic {
		margin-top: 4px;
		margin-left: 4px;
	}
</style>
