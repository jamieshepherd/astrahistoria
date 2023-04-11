<script>
    export let debugOpen;
    const minAmt = 20;
    const maxAmt = 32;
    let strings = [
        '************',
        '******',
        '***************',
        '************',
        '***************',
    ];
    strings.forEach((str, i) => {
        setInterval(() => {
            let characters = [];

            const len = Math.random() * (maxAmt - minAmt) + minAmt;
            for (let i = 0; i < len; i++) {
                characters[i] = Math.random().toString(36).charAt(2);
            }
            strings[i] = characters.join('');
        }, 250);
    });
</script>

<div class="computation-container">
    <div><strong>decrypting datastream</strong></div>
    {#each strings as str}
        <div class="computation" on:dblclick={() => (debugOpen = !debugOpen)}>
            {str}
        </div>
    {/each}
</div>

<style>
    .computation-container {
        position: fixed;
        bottom: 20px;
        right: 30px;
        text-align: right;
        font-size: 0.8rem;
        user-select: none;
    }
</style>
