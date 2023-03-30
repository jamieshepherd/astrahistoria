import { readdirSync } from 'fs';
import { join } from 'path';
import * as fs from 'fs';

//https://stackoverflow.com/a/74478628
function walk(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((file) =>
        file.isDirectory() ? walk(join(dir, file.name)) : join(dir, file.name)
    );
}

const files = walk('./static/data/events')
    .filter((f) => f.split('.').pop() === 'json')
    .sort((a, b) => a.localeCompare(b));

const timeline = [];
files.forEach((f) => {
    const parts = f.split('/');

    let fRaw = fs.readFileSync(f);
    let fJson = JSON.parse(fRaw);

    timeline.push({
        millennium: parts[3],
        year: parts[4],
        name: fJson.name,
        filename: parts[5],
    });
});

let output = JSON.stringify(timeline);
fs.writeFileSync('./src/lib/assets/data/timeline.json', output);
