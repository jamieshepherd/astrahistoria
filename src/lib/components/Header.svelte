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
            <strong>the emperor protects. </strong>
            <div class="cursor" />
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
        background: rgba(0, 0, 0, 0.5);
        font-size: 1.6rem;
        color: white;
        padding: 2px 5px;
        width: max-content;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        background: rgba(0, 0, 0, 0.5);
        font-size: 1.2rem;
        display: flex;
        padding: 2px 5px;
        align-items: center;
        width: max-content;
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
        display: inline-block;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        margin-left: 5px;
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
