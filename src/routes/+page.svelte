<script>
    import '$lib/styles/ResetStyles.scss';
    import '$lib/styles/FontStyles.scss';
    import '$lib/styles/GlobalStyles.scss';

    import Timeline from '$lib/components/Timeline.svelte';
    import Header from '$lib/components/Header.svelte';
    import Computation from '$lib/components/Computation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Starmap from '$lib/components/Starmap/Starmap.svelte';
    import Audio from '$lib/components/Audio.svelte';
    import GlobalPicker from '$lib/components/GlobalPicker.svelte';

    let selectedLocations, debugOpen;
    let selectedMillennium = '41';

    function handleLocationSelect(locations) {
        console.log('locations', locations);
        selectedLocations = locations;
    }
</script>

<main>
    <Starmap {selectedLocations} {debugOpen} />
    <Audio />
    <Header />
    <GlobalPicker bind:selectedMillennium />
    <Timeline {selectedMillennium} onLocationSelect={handleLocationSelect} />
    <Footer />
    <Computation bind:debugOpen />
</main>

<style>
    main {
        background-color: #08090b;
        background-repeat: no-repeat;
        background-position: center -100px;

        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: inherit;
    }
</style>
