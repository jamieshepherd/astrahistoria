<script>
    import { clickOutside } from '$lib/utils/clickOutside.js';

    export let year, millenium, handleClickOutside;
    let eventData = [];

    async function getEvents() {
        const response = await fetch(`/data/${millenium}/${year}.json`);
        eventData = await response.json();
    }

    getEvents();
</script>

{#if year}
    <div
        class="event-year"
        use:clickOutside
        on:click_outside={handleClickOutside}
    >
        <span class="title">{year}.M{millenium}</span>
        {#each eventData as event}
            <div class="event-section">
                <h2>{event.name}</h2>
                {event.summary}
            </div>
        {/each}
        <!--            <PanelSidebar>related</PanelSidebar>-->
    </div>
{/if}

<style lang="scss">
    .title {
        font-size: 2rem;
        background: rgb(97, 239, 255);
        color: #333;
        padding: 4px 10px;
        margin-bottom: 10px;
        display: inline-flex;
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
        backdrop-filter: blur(10px);
        padding: 20px;
        //width: 70%;
        width: 700px;
        animation: animated 0.4s linear backwards 1;
        transition: all 0.1s;
    }
    .event-section {
        margin-bottom: 30px;

        &:last-of-type {
            margin-bottom: 0;
        }
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
