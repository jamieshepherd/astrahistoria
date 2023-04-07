<script>
    import '$lib/styles/ResetStyles.scss';
    import '$lib/styles/FontStyles.scss';
    import '$lib/styles/GlobalStyles.scss';

    import Timeline from '$lib/components/Timeline.svelte';
    import Header from '$lib/components/Header.svelte';
    import Computation from '$lib/components/Computation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Starmap from '$lib/components/Starmap/Starmap.svelte';

    let selectedLocation;

    function handleLocationSelect(location) {
        selectedLocation = location;
    }
</script>

<main>
    <Starmap {selectedLocation} />
    <Header />
    <Timeline onLocationSelect={handleLocationSelect} />
    <Footer />
    <Computation />
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
