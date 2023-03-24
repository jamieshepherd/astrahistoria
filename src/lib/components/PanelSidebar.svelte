<div class="panel-sidebar">
    <slot />
</div>

<style lang="scss">
    .panel-sidebar {
        border: 1px solid rgb(97, 239, 255, 0.5);
        background: linear-gradient(
            rgb(97, 239, 255, 0.1),
            rgb(97, 239, 255, 0)
        );
        backdrop-filter: blur(10px);
        padding: 20px;
        width: 30%;
        margin-left: 30px;
        animation: animated 0.4s linear backwards 1;
        animation-delay: 0.2s;
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
