<script>
    import { clickOutside } from '$lib/utils/clickOutside.js';
    import { draggable } from '@neodrag/svelte';

    export let selectedMillennium;
    let open,
        dragging = false;
    const mItems = [...Array(42).keys()].map((m) => (m + 1).toString());

    function setSelectedMillennium(m) {
        selectedMillennium = m;
        open = false;
    }
</script>

{#if open}
    <div
        class="global-picker expanded"
        use:clickOutside
        on:click_outside={() => {
            if (!dragging) open = false;
        }}
        on:neodrag:start={() => (dragging = true)}
        on:neodrag:end={() => setTimeout(() => (dragging = false), 100)}
    >
        {#each mItems as m}
            <div class="mill" on:click={() => setSelectedMillennium(m)}>
                m{m}
            </div>
        {/each}
    </div>
{/if}

<div class="global-picker">
    <div class="mill active" on:click={() => (open = true)}>
        m{selectedMillennium}
    </div>
</div>

<style lang="scss">
    .global-picker {
        align-items: center;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        padding: 30px;
        z-index: 2;
        user-select: none;

        &.expanded {
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            left: 5px;
            overflow-x: auto;
            width: 100%;
            padding-left: 100px;
        }
    }

    .mill {
        background: rgb(97, 239, 255, 1);
        color: black;
        opacity: 0.5;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 700;
        padding: 0 8px 4px;
        margin-right: 5px;
        transform: scale(0.8);

        &.active,
        &:hover {
            transform: scale(1);
            opacity: 1;
        }
    }

    .svelte-select {
        background: none;
    }
</style>
