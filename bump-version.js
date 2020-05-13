const fs = require('fs');
const packageJson = require('./package.json');

const PATCH = 'patch';
const MINOR = 'minor';
const MAJOR = 'major';

const incrementVersion = (version, type) => {
  const splittedVersion = version.split('.');
  switch (type) {
    case PATCH:
      return `${splittedVersion.slice(0, 2).join('.')}.${parseInt(splittedVersion[2], 0) + 1}`;
    case MINOR:
      return `${splittedVersion[0]}.${parseInt(splittedVersion[1], 0) + 1}.0`;
    case MAJOR:
      return `${parseInt(splittedVersion[0], 0) + 1}.0.0`;
    default:
      return version;
  }
};

const bumpType = process.argv[2];

if (!bumpType) {
  throw new Error('Need bump type argument: patch|minor|major');
}

const newVersion = incrementVersion(packageJson.version, bumpType);

packageJson.version = newVersion;

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

console.log('Version bumped!');
