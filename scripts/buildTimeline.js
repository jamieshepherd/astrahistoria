import { readdirSync } from 'fs';
import { join } from 'path';
import * as fs from 'fs';

//https://stackoverflow.com/a/74478628
function walk(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((file) =>
        file.isDirectory() ? walk(join(dir, file.name)) : join(dir, file.name)
    );
}

const eventFiles = walk('./static/data/events')
    .filter((f) => f.split('.').pop() === 'json')
    .sort((a, b) => a.localeCompare(b));

const timeline = [];
eventFiles.forEach((f) => {
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

const locationFiles = walk('./static/data/locations')
    .filter((f) => f.split('.').pop() === 'json')
    .sort((a, b) => a.localeCompare(b));

const locations = [];
locationFiles.forEach((f) => {
    let fRaw = fs.readFileSync(f);
    let fJson = JSON.parse(fRaw);

    locations.push({ key: f.slice(0, -5).split('/')[3], ...fJson });
});

output = JSON.stringify(locations);
fs.writeFileSync('./src/lib/assets/data/locations.json', output);
