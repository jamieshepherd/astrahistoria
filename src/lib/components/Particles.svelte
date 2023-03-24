<div id="particle-container">
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
</div>

<style lang="scss">
    #particle-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        user-select: none;
        pointer-events: none;
    }

    .particle {
        position: absolute;
        border-radius: 50%;
        box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-1 {
        100% {
            transform: translate3d(31vw, 87vh, 29px);
        }
    }

    @keyframes particle-animation-1 {
        100% {
            transform: translate3d(31vw, 87vh, 29px);
        }
    }
    .particle:nth-child(1) {
        animation: particle-animation-1 60s infinite linear;
        opacity: 0.22;
        height: 5px;
        width: 5px;
        animation-delay: -0.2s;
        transform: translate3d(13vw, 35vh, 72px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-2 {
        100% {
            transform: translate3d(82vw, 33vh, 99px);
        }
    }

    @keyframes particle-animation-2 {
        100% {
            transform: translate3d(82vw, 33vh, 99px);
        }
    }
    .particle:nth-child(2) {
        animation: particle-animation-2 60s infinite linear;
        opacity: 0.45;
        height: 2px;
        width: 2px;
        animation-delay: -0.4s;
        transform: translate3d(77vw, 70vh, 76px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-3 {
        100% {
            transform: translate3d(12vw, 75vh, 76px);
        }
    }

    @keyframes particle-animation-3 {
        100% {
            transform: translate3d(12vw, 75vh, 76px);
        }
    }
    .particle:nth-child(3) {
        animation: particle-animation-3 60s infinite linear;
        opacity: 0.78;
        height: 3px;
        width: 3px;
        animation-delay: -0.6s;
        transform: translate3d(16vw, 65vh, 8px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-4 {
        100% {
            transform: translate3d(60vw, 41vh, 39px);
        }
    }

    @keyframes particle-animation-4 {
        100% {
            transform: translate3d(60vw, 41vh, 39px);
        }
    }
    .particle:nth-child(4) {
        animation: particle-animation-4 60s infinite linear;
        opacity: 0.31;
        height: 5px;
        width: 5px;
        animation-delay: -0.8s;
        transform: translate3d(19vw, 86vh, 13px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-5 {
        100% {
            transform: translate3d(23vw, 7vh, 7px);
        }
    }

    @keyframes particle-animation-5 {
        100% {
            transform: translate3d(23vw, 7vh, 7px);
        }
    }
    .particle:nth-child(5) {
        animation: particle-animation-5 60s infinite linear;
        opacity: 0.9;
        height: 3px;
        width: 3px;
        animation-delay: -1s;
        transform: translate3d(51vw, 29vh, 69px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-6 {
        100% {
            transform: translate3d(61vw, 67vh, 30px);
        }
    }

    @keyframes particle-animation-6 {
        100% {
            transform: translate3d(61vw, 67vh, 30px);
        }
    }
    .particle:nth-child(6) {
        animation: particle-animation-6 60s infinite linear;
        opacity: 0.41;
        height: 2px;
        width: 2px;
        animation-delay: -1.2s;
        transform: translate3d(40vw, 9vh, 82px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-7 {
        100% {
            transform: translate3d(34vw, 15vh, 53px);
        }
    }

    @keyframes particle-animation-7 {
        100% {
            transform: translate3d(34vw, 15vh, 53px);
        }
    }
    .particle:nth-child(7) {
        animation: particle-animation-7 60s infinite linear;
        opacity: 0.94;
        height: 5px;
        width: 5px;
        animation-delay: -1.4s;
        transform: translate3d(85vw, 29vh, 13px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-8 {
        100% {
            transform: translate3d(40vw, 90vh, 5px);
        }
    }

    @keyframes particle-animation-8 {
        100% {
            transform: translate3d(40vw, 90vh, 5px);
        }
    }
    .particle:nth-child(8) {
        animation: particle-animation-8 60s infinite linear;
        opacity: 0.57;
        height: 5px;
        width: 5px;
        animation-delay: -1.6s;
        transform: translate3d(56vw, 59vh, 54px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-9 {
        100% {
            transform: translate3d(36vw, 76vh, 14px);
        }
    }

    @keyframes particle-animation-9 {
        100% {
            transform: translate3d(36vw, 76vh, 14px);
        }
    }
    .particle:nth-child(9) {
        animation: particle-animation-9 60s infinite linear;
        opacity: 0.96;
        height: 3px;
        width: 3px;
        animation-delay: -1.8s;
        transform: translate3d(21vw, 20vh, 35px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-10 {
        100% {
            transform: translate3d(34vw, 23vh, 83px);
        }
    }

    @keyframes particle-animation-10 {
        100% {
            transform: translate3d(34vw, 23vh, 83px);
        }
    }
    .particle:nth-child(10) {
        animation: particle-animation-10 60s infinite linear;
        opacity: 0.5;
        height: 5px;
        width: 5px;
        animation-delay: -2s;
        transform: translate3d(89vw, 44vh, 43px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-11 {
        100% {
            transform: translate3d(22vw, 67vh, 77px);
        }
    }

    @keyframes particle-animation-11 {
        100% {
            transform: translate3d(22vw, 67vh, 77px);
        }
    }
    .particle:nth-child(11) {
        animation: particle-animation-11 60s infinite linear;
        opacity: 0.65;
        height: 2px;
        width: 2px;
        animation-delay: -2.2s;
        transform: translate3d(24vw, 82vh, 74px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-12 {
        100% {
            transform: translate3d(73vw, 59vh, 93px);
        }
    }

    @keyframes particle-animation-12 {
        100% {
            transform: translate3d(73vw, 59vh, 93px);
        }
    }
    .particle:nth-child(12) {
        animation: particle-animation-12 60s infinite linear;
        opacity: 0.8;
        height: 5px;
        width: 5px;
        animation-delay: -2.4s;
        transform: translate3d(70vw, 16vh, 42px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-13 {
        100% {
            transform: translate3d(14vw, 7vh, 11px);
        }
    }

    @keyframes particle-animation-13 {
        100% {
            transform: translate3d(14vw, 7vh, 11px);
        }
    }
    .particle:nth-child(13) {
        animation: particle-animation-13 60s infinite linear;
        opacity: 0.89;
        height: 2px;
        width: 2px;
        animation-delay: -2.6s;
        transform: translate3d(12vw, 54vh, 47px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-14 {
        100% {
            transform: translate3d(5vw, 80vh, 79px);
        }
    }

    @keyframes particle-animation-14 {
        100% {
            transform: translate3d(5vw, 80vh, 79px);
        }
    }
    .particle:nth-child(14) {
        animation: particle-animation-14 60s infinite linear;
        opacity: 0.84;
        height: 3px;
        width: 3px;
        animation-delay: -2.8s;
        transform: translate3d(64vw, 31vh, 13px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-15 {
        100% {
            transform: translate3d(81vw, 49vh, 71px);
        }
    }

    @keyframes particle-animation-15 {
        100% {
            transform: translate3d(81vw, 49vh, 71px);
        }
    }
    .particle:nth-child(15) {
        animation: particle-animation-15 60s infinite linear;
        opacity: 0.66;
        height: 2px;
        width: 2px;
        animation-delay: -3s;
        transform: translate3d(58vw, 20vh, 74px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-16 {
        100% {
            transform: translate3d(62vw, 82vh, 83px);
        }
    }

    @keyframes particle-animation-16 {
        100% {
            transform: translate3d(62vw, 82vh, 83px);
        }
    }
    .particle:nth-child(16) {
        animation: particle-animation-16 60s infinite linear;
        opacity: 0.89;
        height: 3px;
        width: 3px;
        animation-delay: -3.2s;
        transform: translate3d(42vw, 20vh, 10px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-17 {
        100% {
            transform: translate3d(51vw, 61vh, 69px);
        }
    }

    @keyframes particle-animation-17 {
        100% {
            transform: translate3d(51vw, 61vh, 69px);
        }
    }
    .particle:nth-child(17) {
        animation: particle-animation-17 60s infinite linear;
        opacity: 0.01;
        height: 3px;
        width: 3px;
        animation-delay: -3.4s;
        transform: translate3d(68vw, 32vh, 35px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-18 {
        100% {
            transform: translate3d(6vw, 79vh, 88px);
        }
    }

    @keyframes particle-animation-18 {
        100% {
            transform: translate3d(6vw, 79vh, 88px);
        }
    }
    .particle:nth-child(18) {
        animation: particle-animation-18 60s infinite linear;
        opacity: 0.22;
        height: 3px;
        width: 3px;
        animation-delay: -3.6s;
        transform: translate3d(5vw, 26vh, 7px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-19 {
        100% {
            transform: translate3d(77vw, 32vh, 40px);
        }
    }

    @keyframes particle-animation-19 {
        100% {
            transform: translate3d(77vw, 32vh, 40px);
        }
    }
    .particle:nth-child(19) {
        animation: particle-animation-19 60s infinite linear;
        opacity: 0.78;
        height: 2px;
        width: 2px;
        animation-delay: -3.8s;
        transform: translate3d(72vw, 23vh, 17px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-20 {
        100% {
            transform: translate3d(10vw, 18vh, 74px);
        }
    }

    @keyframes particle-animation-20 {
        100% {
            transform: translate3d(10vw, 18vh, 74px);
        }
    }
    .particle:nth-child(20) {
        animation: particle-animation-20 60s infinite linear;
        opacity: 0.18;
        height: 3px;
        width: 3px;
        animation-delay: -4s;
        transform: translate3d(17vw, 64vh, 66px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-21 {
        100% {
            transform: translate3d(55vw, 52vh, 42px);
        }
    }

    @keyframes particle-animation-21 {
        100% {
            transform: translate3d(55vw, 52vh, 42px);
        }
    }
    .particle:nth-child(21) {
        animation: particle-animation-21 60s infinite linear;
        opacity: 0.62;
        height: 2px;
        width: 2px;
        animation-delay: -4.2s;
        transform: translate3d(69vw, 88vh, 86px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-22 {
        100% {
            transform: translate3d(80vw, 74vh, 30px);
        }
    }

    @keyframes particle-animation-22 {
        100% {
            transform: translate3d(80vw, 74vh, 30px);
        }
    }
    .particle:nth-child(22) {
        animation: particle-animation-22 60s infinite linear;
        opacity: 0.32;
        height: 3px;
        width: 3px;
        animation-delay: -4.4s;
        transform: translate3d(34vw, 40vh, 100px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-23 {
        100% {
            transform: translate3d(83vw, 15vh, 53px);
        }
    }

    @keyframes particle-animation-23 {
        100% {
            transform: translate3d(83vw, 15vh, 53px);
        }
    }
    .particle:nth-child(23) {
        animation: particle-animation-23 60s infinite linear;
        opacity: 0.65;
        height: 3px;
        width: 3px;
        animation-delay: -4.6s;
        transform: translate3d(39vw, 6vh, 48px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-24 {
        100% {
            transform: translate3d(12vw, 7vh, 58px);
        }
    }

    @keyframes particle-animation-24 {
        100% {
            transform: translate3d(12vw, 7vh, 58px);
        }
    }
    .particle:nth-child(24) {
        animation: particle-animation-24 60s infinite linear;
        opacity: 0.43;
        height: 3px;
        width: 3px;
        animation-delay: -4.8s;
        transform: translate3d(83vw, 9vh, 82px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-25 {
        100% {
            transform: translate3d(69vw, 58vh, 16px);
        }
    }

    @keyframes particle-animation-25 {
        100% {
            transform: translate3d(69vw, 58vh, 16px);
        }
    }
    .particle:nth-child(25) {
        animation: particle-animation-25 60s infinite linear;
        opacity: 0.36;
        height: 5px;
        width: 5px;
        animation-delay: -5s;
        transform: translate3d(2vw, 57vh, 1px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-26 {
        100% {
            transform: translate3d(53vw, 68vh, 3px);
        }
    }

    @keyframes particle-animation-26 {
        100% {
            transform: translate3d(53vw, 68vh, 3px);
        }
    }
    .particle:nth-child(26) {
        animation: particle-animation-26 60s infinite linear;
        opacity: 0.22;
        height: 2px;
        width: 2px;
        animation-delay: -5.2s;
        transform: translate3d(11vw, 77vh, 8px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-27 {
        100% {
            transform: translate3d(18vw, 10vh, 90px);
        }
    }

    @keyframes particle-animation-27 {
        100% {
            transform: translate3d(18vw, 10vh, 90px);
        }
    }
    .particle:nth-child(27) {
        animation: particle-animation-27 60s infinite linear;
        opacity: 0.09;
        height: 3px;
        width: 3px;
        animation-delay: -5.4s;
        transform: translate3d(73vw, 1vh, 17px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-28 {
        100% {
            transform: translate3d(37vw, 37vh, 38px);
        }
    }

    @keyframes particle-animation-28 {
        100% {
            transform: translate3d(37vw, 37vh, 38px);
        }
    }
    .particle:nth-child(28) {
        animation: particle-animation-28 60s infinite linear;
        opacity: 0.49;
        height: 5px;
        width: 5px;
        animation-delay: -5.6s;
        transform: translate3d(24vw, 84vh, 24px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-29 {
        100% {
            transform: translate3d(18vw, 83vh, 77px);
        }
    }

    @keyframes particle-animation-29 {
        100% {
            transform: translate3d(18vw, 83vh, 77px);
        }
    }
    .particle:nth-child(29) {
        animation: particle-animation-29 60s infinite linear;
        opacity: 0.53;
        height: 2px;
        width: 2px;
        animation-delay: -5.8s;
        transform: translate3d(60vw, 34vh, 32px);
        background: rgba(255, 255, 255, 0.2);
    }

    @-webkit-keyframes particle-animation-30 {
        100% {
            transform: translate3d(19vw, 51vh, 45px);
        }
    }

    @keyframes particle-animation-30 {
        100% {
            transform: translate3d(19vw, 51vh, 45px);
        }
    }
    .particle:nth-child(30) {
        animation: particle-animation-30 60s infinite;
        opacity: 0.58;
        height: 3px;
        width: 3px;
        animation-delay: -6s;
        transform: translate3d(35vw, 60vh, 42px);
        background: rgba(255, 255, 255, 0.2);
    }
</style>
