<script>
    import github from '$lib/assets/icons/github.svg';
</script>

<footer>
    <p>
        <strong>
            astra historia is an unofficial, <img
                class="icon"
                src={github}
                alt="Github"
            /><a href="https://github.com/jamieshepherd/historia">open-source</a
            >
            , warhammer 40,000 fan site by
            <a href="https://jamie.sh">jamie.sh</a>
        </strong>
    </p>
    <p>
        warhammer, warhammer 40,000, the ‘aquila’ double-headed eagle logo, and
        all associated logos, illustrations, images, names, creatures, races,
        vehicles, locations, weapons, characters, and the distinctive likenesses
        thereof, are either ® or ™, and/or © <a
            href="https://games-workshop.com"
        >
            games workshop limited</a
        >, variably registered around the world.
    </p>
</footer>

<style>
    footer {
        display: block;
        font-size: 1rem;
        text-align: center;
        opacity: 0.65;
        padding: 30px;
        width: 100%;
        user-select: none;
    }

    p {
        margin: 0 auto;
        max-width: 900px;
    }

    .icon {
        display: inline-block;
        height: 12px;
        margin-right: 2px;
        margin-bottom: -2px;
    }
</style>
