<script>
    import Timeline from '$lib/components/Timeline.svelte';
    import Header from '$lib/components/Header.svelte';
    import Computation from '$lib/components/Computation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Particles from '$lib/components/Particles.svelte';
</script>

<main>
    <Header />
    <Timeline />
    <Footer />
    <Computation />
    <Particles />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
    }
</style>
