<script>
    import link from '$lib/assets/icons/external-link.svg';

    export let id;
    let bookData;

    async function getData() {
        const response = await fetch(`/data/library/${id}.json`);

        bookData = await response.json();
    }

    getData();
</script>

{#if bookData}
    <div class="library-book">
        {#if bookData.cover}
            <img
                class="book-cover"
                src="/data/library/{id}.jpg"
                alt="book cover"
            />
        {/if}
        <div class="book-details">
            <h3>{bookData.title}</h3>
            <span class="book-author">{bookData.author} ({bookData.year})</span>
            {#if bookData.synopsis}
                <p>{bookData.synopsis}</p>
            {/if}
            {#if bookData.openLibrary}
                <a
                    class="openlibrary"
                    href="https://openlibrary.org/works/{bookData.openLibrary}"
                    target="_blank"
                    ><img src={link} alt="open library" /> OpenLibrary.org</a
                >
            {/if}
        </div>
    </div>
{/if}

<style lang="scss">
    .library-book {
        display: flex;
        min-height: 24px;
        margin-bottom: 30px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .book-cover {
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
        width: 150px;
        height: 245px;
        object-fit: cover;
        margin-right: 20px;
    }
    .book-author {
        display: block;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .book-details {
    }
    h3 {
    }
    .openlibrary {
        align-items: center;
        display: flex;
        font-size: 1.6rem;
        margin-top: 5px;

        img {
            width: 14px;
            margin-right: 3px;
        }
    }
</style>
