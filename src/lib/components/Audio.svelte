<script>
    import music from '$lib/assets/audio/surrounded.mp3';
    import vol from '$lib/assets/icons/volume.svg';
    import volX from '$lib/assets/icons/volume-x.svg';

    let playing = false;
    let inited = false;

    let audio;

    function playPause() {
        if (audio.paused || audio.ended) {
            // Change the button to a pause button
            // changeButtonType(btnPlayPause, 'pause');
            audio.play();
            playing = true;
        } else {
            // Change the button to a play button
            // changeButtonType(btnPlayPause, 'play');
            audio.pause();
            playing = false;
        }
    }

    document.addEventListener('click', () => {
        if (inited === false) {
            inited = true;
            audio.play();
            playing = true;
        }
    });

    $: if (audio) {
        audio.autoplay = true;
        audio.volume = 0.2;
    }
</script>

<div class="audio-controls" on:click={playPause}>
    {#if playing}
        <img src={volX} alt="Mute" />
    {/if}
    {#if !playing}
        <img src={vol} alt="Play" />
    {/if}
</div>

<audio bind:this={audio} preload="auto" autoplay loop>
    <source src={music} type="audio/mp3" />
</audio>

<style lang="scss">
    .audio-controls {
        color: white;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 48px;
        height: 48px;
        cursor: pointer;
        opacity: 0.7;
        padding: 10px;
        transition: all 0.2s;
        z-index: 0;

        &:hover {
            opacity: 1;
        }
    }
</style>
