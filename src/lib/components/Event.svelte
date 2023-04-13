<script>
    import library from '$lib/assets/icons/library.svg';
    import crosshair from '$lib/assets/icons/crosshair.svg';
    import Book from '$lib/components/Book.svelte';

    export let event, onLocationSelect;
    let showLibrary = false;

    function handleToggleLibrary() {
        showLibrary = !showLibrary;
    }
</script>

<div class="event-section">
    <h2>{event.name}</h2>
    <div class="event-references">
        {#if event.location}
            <button
                on:click={() => onLocationSelect(event.location)}
                class="event-icon"
                aria-label="Show Location"
                data-microtip-position="right"
                role="tooltip"><img src={crosshair} alt="target" /></button
            >
        {/if}
        {#if event.library && event.library.length > 0}
            <button
                on:click={handleToggleLibrary}
                class="event-icon"
                aria-label="View Library"
                data-microtip-position="right"
                role="tooltip"><img src={library} alt="library" /></button
            >
        {/if}
    </div>
    {#if showLibrary}
        <div class="event-library">
            <button class="close-library" on:click={handleToggleLibrary}
                >close</button
            >
            {#each event.library as book}<Book id={book} />{/each}
        </div>
    {/if}
    {#if event.summary}
        {event.summary}
    {/if}
</div>

<style lang="scss">
    .event-section {
        margin-bottom: 30px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .event-references {
        position: relative;
    }
    // Note this is a little bit janky so I can use a CSS tooltip where the
    // tooltip sits on top of the content to the right. Eventually I'll
    // probably implement a JS tooltip that actually respects zIndex
    .event-icon {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 1px;
        transition: all 0.2s;
        opacity: 0.5;
        position: relative;

        &:hover {
            transform: scale(1.2);
            opacity: 1;
        }

        img {
            width: 18px;
            height: 18px;
        }

        &:nth-of-type(1) {
            z-index: 11;
        }

        &:nth-of-type(2) {
            z-index: 10;
        }
    }
    .event-library {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgb(97, 239, 255, 0.5);
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
        margin: 10px 0 20px;
        width: 100%;
        position: relative;
        padding: 15px;

        .close-library {
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
    }
</style>
