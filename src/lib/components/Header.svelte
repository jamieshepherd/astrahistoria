<header>
    <h1>Astra historia</h1>
    <ul>
        <li>authorization code decoding...</li>
        <li>
            <span class="vermillion" />
            <strong>vermillion</strong>
            &nbsp;clearance granted...
        </li>
        <li>archive loaded...</li>
        <li>
            <strong>the emperor protects.</strong>
        </li>
        <li>
            <div class="cursor" />
            &nbsp;
        </li>
    </ul>
</header>

<style lang="scss">
    header {
        position: absolute;
        top: 30px;
        left: 30px;
        user-select: none;
    }
    h1 {
        font-size: 1.6rem;
        color: white;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 1.2rem;
        display: flex;
        align-items: center;
    }
    .vermillion {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #e34234;
        margin-right: 5px;
    }
    .cursor {
        background: rgba(255, 255, 255, 0.5);
        height: 14px;
        width: 2px;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes flash {
        0% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        65% {
            opacity: 1;
        }
    }
</style>
