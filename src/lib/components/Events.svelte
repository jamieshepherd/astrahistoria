<script>
    import { clickOutside } from '$lib/utils/clickOutside.js';
    import Event from '$lib/components/Event.svelte';

    export let year, millennium, events, onClose, onLocationSelect;
    let eventData = [];

    async function getEvents() {
        for (const event of events) {
            const response = await fetch(
                `/data/events/${millennium}/${year}/${event.filename}`
            );
            eventData.push(await response.json());
        }
        eventData = [...eventData];
    }

    getEvents();
</script>

{#if year}
    <div class="event-year" use:clickOutside>
        <button class="close-year" on:click={onClose}>close</button>
        <span class="title"><span class="approx" />{year}.M{millennium}</span>
        {#each eventData as event}
            <Event {event} {onLocationSelect} />
        {/each}
    </div>
{/if}

<style lang="scss">
    .title {
        font-size: 2rem;
        background: rgb(97, 239, 255);
        color: #333;
        display: inline-block;
        padding: 2px 10px;
        margin-bottom: 10px;

        .approx {
            display: inline-block;
            margin-right: 3px;
        }
    }
    .close-year {
        border: none;
        outline: none;
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        background: rgb(97, 239, 255);
        color: #333;
        font-size: 1.2rem;
        font-weight: 700;
        padding: 4px 6px;
    }
    .event-year {
        font-family: 'Share Tech Mono', 'sans-serif';
        font-size: 1.8rem;
        cursor: initial;
        margin-left: auto;
        margin-right: 50px;
        margin-top: 50px;
        max-height: 100%;
        overflow-y: auto;

        border: 1px solid rgb(97, 239, 255, 0.5);
        background: linear-gradient(
            rgb(97, 239, 255, 0.1),
            rgb(97, 239, 255, 0)
        );
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        backdrop-filter: blur(80px);
        padding: 20px;
        //width: 70%;
        width: 700px;
        animation: animated 0.4s linear backwards 1;
        transition: all 0.1s;
    }
    h2 {
        font-size: 2.8rem;
    }

    @-webkit-keyframes animated {
        to,
        20%,
        40%,
        60% {
            opacity: 1;
        }
        from,
        10%,
        30%,
        50% {
            opacity: 0;
        }
    }
</style>
