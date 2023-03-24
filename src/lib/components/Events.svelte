<script>
    import PanelMain from '$lib/components/PanelMain.svelte';
    import PanelSidebar from '$lib/components/PanelSidebar.svelte';

    export let year, millenium;
    let eventData = [];

    async function getEvents() {
        const response = await fetch(`/data/${millenium}/${year}.json`);
        eventData = await response.json();
    }

    getEvents();
</script>

{#if year}
    <div class="event">
        <div class="event-panels">
            <PanelMain>
                {#each eventData as event}
                    <h2>{event.name}</h2>
                    {event.summary}
                {/each}
            </PanelMain>
            <!--            <PanelSidebar>related</PanelSidebar>-->
        </div>
    </div>
{/if}

<style lang="scss">
    .event {
        font-family: 'Share Tech Mono', 'sans-serif';
        font-size: 1.8rem;
        cursor: initial;
        position: fixed;
        top: 50px;
        right: 50px;
    }
    .event-panels {
        display: flex;
        margin: 0 auto;
        min-height: 400px;
        width: 700px;
        height: 100%;
    }
    h2 {
    }
</style>
