# Astra Historia
A complete visualization of the Warhammer 40K history across the galaxy.

## Contribution
Want to get involved in the Astra Historia? Great! You don't need to be a programmer or psyker to help out - here are some ways you can get started:
### Events
It's (hopefully) very easy to add new events - or edit events in the Astra Historia. If you're new to GitHub or source control in general - there's a great resource by GitHub on [Contributing to Projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) that you should check out first.

When you're done, you'll want to navigate towards the `/static/data/events` directory. The first child directory here is the _millennium_ the event happened. For example, everything in the 41st millenium will be under `/static/data/events/41/`.

Inside of that directory, you have a bunch of directories for years within a millennium. These directories contain all the events we currently have recorded in the Astra Historia. For example, the Fall of Tanith (Gaunts Ghosts event) can be found at `/static/data/events/41/765/fall-of-tanith.json`.

A JSON file is a human-readable way to define things. You can [read more about JSON files here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON). An _event_ JSON file has a specific structure you must follow, it looks something like this:

```json
{
  "name": "Fall of Tanith",
  "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "library": [9780671784102,9780671784102],
  "location": ["tanith"]
}
```
Most of these fields are self-explanatory - but there are 2 fields that are related to other types of data on the website - the `library` and `location` fields. Both of these reference the names of other JSON files on the website. For example, Ghostmaker referenced here can be found at `/static/data/library/9780671784102.json`, and the location referenced here can be found at `/static/data/library/tanith.json`. Both of these fields are _optional_, and not required for an event to be added.

To add a new event, simply make a new file in the correct millennium and year the event took place, follow the above structure - and give it an easy to remember name that's readable on the web (e.g. hyphens instead of spaces).

When you're done, create a PR with your work, and we'll get it merged in as soon as possible.

### Library & Book References
It's possible to reference literature - usually by the Black Library - when creating events for Astra Historia. Doing so is pretty simple. Much like with Events, you'll need to create a new JSON file - this time under the `/static/data/library` directory. You'll want to name it the same as it's ISBN-13 number, which you can find by searching the book on OpenLibrary.org. A library entry looks something like this:

```json
{
  "title": "Ghostmaker (Gaunt's Ghosts)",
  "author": "Dan Abnett",
  "synopsis": "On the jungle world of Monthax, Colonel-Commissar Ibram Gaunt and his Tanith First-and-Only await the order to advance into the sweltering wilderness and drive the alien eldar from the Imperial planet.",
  "year": "2020",
  "openLibrary": "OL5843450W",
  "cover": true
}
```
There are a few non-obious call-outs here. Firstly, the _openLibrary_ field here refers to the ID the book has been given on OpenLibrary.org. We use this to send users to in order to find more information about a book, the editions, and where to buy it.

Secondly, the _cover_ field refers to whether or not you have provided a cover image for the entry. To do that, you'll need to also drop in a jpg image file alongside the JSON file - with the same ISBN-13 code as the filename. For example `9780671784102.jpg` would be in the directory with `9780671784102.json`. These files can only be jpg files, and should be as small as possible to preserve bandwidth. You can usually find a good cover image on OpenLibrary.org.

### Locations
Coming soon.

### Coders
Astra Historia was built pretty quickly as I wanted to learn Svelte and ThreeJS over a weekend. As a result - there's probably going to be a bunch of bugs, performance issues, and more. Please open PRs liberally, every little helps.

## Outstanding issues
- In general, though I think the galaxy looks pretty cool - I'd love to get it as close to Warhammer 40K accurate as possible. Any help in this direction would be _greatly_ appreciated!
- Unhappy with how camera panning works. I'm using OrbitControls out of the box, but I don't really want to pan around a target, just have the camera pan on drag, and zoom on mouse scroll or pinch.
- There's a little too much transparency on the warp storms - and stars underneath show through. Unsure how to render this better right now.
