<div class="panel-main">
    <slot />
</div>

<style lang="scss">
    .panel-main {
        border: 1px solid rgb(97, 239, 255, 0.5);
        background: linear-gradient(
            rgb(97, 239, 255, 0.1),
            rgb(97, 239, 255, 0)
        );
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        backdrop-filter: blur(10px);
        padding: 20px;
        //width: 70%;
        width: 700px;
        animation: animated 0.4s linear backwards 1;
    }

    @-webkit-keyframes animated {
        to,
        20%,
        40%,
        60%,
        80% {
            opacity: 1;
        }
        from,
        10%,
        30%,
        50%,
        70%,
        90% {
            opacity: 0;
        }
    }
</style>
