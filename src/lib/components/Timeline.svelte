<script>
    import chevron from '$lib/assets/icons/chevron.svg';
    import chevrons from '$lib/assets/icons/chevrons.svg';
    import point from '$lib/assets/icons/devastator.svg';
    import pointActive from '$lib/assets/icons/devastator-a.svg';
    import timeline from '$lib/assets/data/timeline.json';
    import { draggable } from '@neodrag/svelte';
    import Events from '$lib/components/Events.svelte';
    import { groupBy } from '$lib/utils/ArrayUtils.js';

    export let onLocationSelect, selectedMillennium;
    let currentYear = null;
    let groupedEvents = {};
    const allYears = [...Array(1000).keys()].map((y) => (y + 1).toString());
    let years = [];

    $: groupedEvents = groupBy(
        timeline.filter((t) => t.millennium === selectedMillennium),
        (e) => e.year
    );
    $: years = Object.keys(groupedEvents);

    function selectYear(year) {
        currentYear = year;
    }

    function handleClose() {
        selectYear(null);
        onLocationSelect(null);
    }
</script>

{#if currentYear}
    {#key currentYear}
        <Events
            millennium={selectedMillennium}
            year={currentYear}
            events={groupedEvents[currentYear]}
            {onLocationSelect}
            onClose={handleClose}
        />
    {/key}
{/if}

<div id="timeline-slider" class="timeline-slider">
    <div id="timeline-line" class="timeline-line">
        <div class="timeline-line-inner" />
    </div>

    <div class="timeline-button timeline-start">
        <img src={chevrons} alt="arrow start" />
    </div>
    <div class="timeline-button timeline-previous">
        <img src={chevron} alt="arrow previous" />
    </div>
    <div class="timeline-button timeline-next">
        <img src={chevron} alt="arrow next" />
    </div>
    <div class="timeline-button timeline-end">
        <img src={chevrons} alt="arrow end" />
    </div>

    <div
        class="timeline-events"
        use:draggable={{
            axis: 'x',
            defaultPosition: { x: 0 },
        }}
    >
        {#each allYears as year}
            <div
                class="timeline-point {years.includes(year)
                    ? 'has-events'
                    : ''} {currentYear && currentYear === year ? 'active' : ''}"
                style="left: {year * 70}px"
                on:click={() =>
                    years.includes(year) ? selectYear(year) : null}
            >
                {#if currentYear && currentYear === year}
                    <img src={pointActive} alt="Event" />
                {:else if years.includes(year)}
                    <img src={point} alt="Event" />
                {/if}
                <span>{year}</span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .timeline-slider {
        cursor: all-scroll;
        height: 60px;
        position: relative;
        margin-top: auto;

        &:after {
            content: '';
            background: linear-gradient(
                to right,
                black,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0),
                black
            );
            position: absolute;
            pointer-events: none;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }
    }

    .timeline-events {
        position: relative;
        height: 60px;
        width: 70000px;
    }

    .timeline-line {
        background: linear-gradient(
            to right,
            rgba(97, 239, 255, 0.2),
            rgb(97, 239, 255, 1),
            rgba(97, 239, 255, 0.2)
        );
        bottom: -60px;
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
        bottom: 0;
        left: 50%;
        padding: 10px;
        width: 50px;
        text-align: center;
        opacity: 1;
        transition: all 0.2s;
        transform: scale(0.75);
        user-select: none;

        &.has-events {
            cursor: pointer;

            &.active,
            &:hover {
                opacity: 1;
                transform: scale(1);
            }
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

    .timeline-button {
        background: black;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        cursor: pointer;
        position: absolute;
        width: 30px;
        padding: 5px;
        bottom: 10px;
        z-index: 1;
        transition: 0.2s;

        &:hover {
            border-color: rgb(97, 239, 255, 1);
            transform: scale(1.1);
            opacity: 1;
        }
    }

    .timeline-start {
        left: 30px;

        img {
            transform: rotate(180deg);
        }
    }
    .timeline-previous {
        left: 70px;

        img {
            transform: rotate(180deg);
        }
    }
    .timeline-next {
        right: 70px;
    }
    .timeline-end {
        right: 30px;
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
