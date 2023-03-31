<script>
    import point from '$lib/assets/icons/devastator.svg';
    import pointActive from '$lib/assets/icons/devastator-a.svg';
    import timeline from '$lib/assets/data/timeline.json';
    import { draggable } from '@neodrag/svelte';
    import Events from '$lib/components/Events.svelte';
    import { groupBy } from '$lib/utils/ArrayUtils.js';

    let currentYear = null;
    let currentMillenniumIndex = [0];
    let millennium = timeline[currentMillenniumIndex];

    const groupedEvents = groupBy(timeline, (e) => e.year);
    const years = Object.keys(groupedEvents);

    function selectYear(year) {
        currentYear = year;
    }

    function handleClose() {
        selectYear(null);
    }
</script>

{#if currentYear}
    {#key currentYear}
        <Events
            millennium={millennium.millennium}
            year={currentYear}
            events={groupedEvents[currentYear]}
            {handleClose}
        />
    {/key}
{/if}

<div id="timeline-slider" class="timeline-slider">
    <div id="timeline-line" class="timeline-line">
        <div class="timeline-line-inner" />
    </div>

    <div
        class="timeline-events"
        use:draggable={{ axis: 'x', defaultPosition: { x: -765 * 70 + 800 } }}
    >
        {#each years as year (year)}
            <div
                class="timeline-point {currentYear && currentYear === year
                    ? 'active'
                    : ''}"
                style="left: {year * 70}px"
                on:click={() => selectYear(year)}
            >
                {#if currentYear && currentYear === year}
                    <img src={pointActive} alt="Event" />
                {:else}
                    <img src={point} alt="Event" />
                {/if}
                <span>{year}<em>.m{millennium.millennium}</em></span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .timeline-slider {
        cursor: all-scroll;
        height: 160px;
        position: relative;
        margin-top: auto;
        margin-bottom: -20px;
    }

    .timeline-events {
        position: relative;
        height: 160px;
        width: 70000px;
    }

    .timeline-line {
        background: linear-gradient(
            to right,
            rgba(97, 239, 255, 0.2),
            rgb(97, 239, 255, 1),
            rgba(97, 239, 255, 0.2)
        );
        bottom: -140px;
        height: 1px;
        box-shadow: 0 0 10px 5px rgba(97, 239, 255, 0.2);
        position: relative;
        transition: all 0.2s;
        user-select: none;
        width: 100%;
    }

    .timeline-line-inner {
        width: 60%;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
        height: 1px;
        margin: 0 auto;
    }

    .timeline-point {
        position: absolute;
        bottom: 20px;
        left: 50%;
        cursor: pointer;
        padding: 10px;
        width: 50px;
        text-align: center;
        opacity: 0.5;
        transition: all 0.2s;
        transform: scale(0.75);
        user-select: none;

        &.active,
        &:hover {
            opacity: 1;
            transform: scale(1);
        }

        &.active {
            color: rgb(97, 239, 255, 1);
        }

        img {
            width: 28px;
            height: 28px;
            user-select: none;
        }

        span {
            font-size: 1.2rem;
            position: absolute;
            top: -15px;
            left: -25px;
            right: -25px;
            text-align: center;
        }

        em {
            font-size: 0.8rem;
            font-style: normal;
            opacity: 0.5;
        }
    }

    @keyframes innerLine {
        0% {
            left: -100%;
        }

        100% {
            left: 100%;
        }
    }
</style>
