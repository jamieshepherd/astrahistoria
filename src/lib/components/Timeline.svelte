<script>
    import chevron from '$lib/assets/icons/chevron.svg';
    import chevrons from '$lib/assets/icons/chevrons.svg';
    import point from '$lib/assets/icons/devastator.svg';
    import pointActive from '$lib/assets/icons/devastator-a.svg';
    import timeline from '$lib/assets/data/timeline.json';
    import Events from '$lib/components/Events.svelte';
    import { groupBy } from '$lib/utils/ArrayUtils.js';
    import { useConveyer } from '@egjs/svelte-conveyer';

    export let onLocationSelect, selectedMillennium;
    let currentYear = null;
    let groupedEvents = {};
    const allYears = [...Array(1000).keys()].map((y) => (y + 1).toString());
    let years = [];
    const { ref, scrollBy, scrollTo } = useConveyer({
        horizontal: true,
        preventClickOnDrag: true,
        itemSelector: '.timeline-point',
    });

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

    $: if (selectedMillennium && ref.current) {
        scrollTo(0, 200);
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

    <div class="buttons">
        <div
            class="timeline-button timeline-start"
            on:click={() => scrollTo(0, 200)}
        >
            <img src={chevrons} alt="arrow start" />
        </div>
        <div
            class="timeline-button timeline-previous"
            on:click={() => scrollBy(-120 * 5, 200)}
        >
            <img src={chevron} alt="arrow previous" />
        </div>
        <div
            class="timeline-button timeline-next"
            on:click={() => scrollBy(120 * 5, 200)}
        >
            <img src={chevron} alt="arrow next" />
        </div>
        <div
            class="timeline-button timeline-end"
            on:click={() => scrollTo(120 * 1000, 200)}
        >
            <img src={chevrons} alt="arrow end" />
        </div>
    </div>

    <div class="timeline-events items horizontal" use:ref>
        {#each allYears as year (year)}
            <div
                class="item timeline-point {years.includes(year)
                    ? 'has-events'
                    : ''} {currentYear && currentYear === year ? 'active' : ''}"
                on:click={() =>
                    years.includes(year) ? selectYear(year) : null}
            >
                <span>{year}</span>
                {#if currentYear && currentYear === year}
                    <img src={pointActive} alt="Event" />
                {:else if years.includes(year)}
                    <img src={point} alt="Event" />
                {/if}
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

        @media only screen and (max-width: 1000px) {
            margin-bottom: 20px;
        }

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
        //background: rgba(255, 0, 0, 0.1);
        //position: relative;
        //height: 60px;
        //width: 80000px;
        padding: 0 150px;
        width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
        display: flex;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
            display: none;
        }
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
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 120px;
        text-align: center;
        opacity: 1;
        transition: all 0.2s;
        transform: scale(0.75);
        user-select: none;

        flex-basis: 70px;
        flex-grow: 0;
        flex-shrink: 0;

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
            margin-top: 10px;
        }

        span {
            display: block;
            font-size: 1.2rem;
            font-weight: 700;
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
        user-select: none;

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
