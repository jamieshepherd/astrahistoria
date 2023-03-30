<script>
    import library from '$lib/assets/icons/library.svg';
    import crosshair from '$lib/assets/icons/crosshair.svg';
    import Book from '$lib/components/Book.svelte';

    export let event;
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
                class="event-icon"
                aria-label="Event Location"
                data-microtip-position="right"
                role="tooltip"><img src={crosshair} alt="target" /></button
            >
        {/if}
        {#if event.library}
            <button
                on:click={handleToggleLibrary}
                class="event-icon"
                aria-label="Event Library"
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
    {event.summary}
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
        height: 30px;
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
        position: absolute;

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
            left: 30px;
            z-index: 10;
        }
    }
    .event-library {
        border: 2px dashed rgb(97, 239, 255, 0.5);
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
