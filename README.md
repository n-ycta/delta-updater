# Delta Updater

Check and install supported official Core and managed-plugin releases independently of the browser window.

Independent headless Delta service. No browser, Web plugin, or graphical session is required. Web, Desktop and Android are optional clients; Android delegates desktop-only operations to a trusted paired desktop/VPS node.

## Install and use

Install **Delta Updater** from the official Delta plugin catalog on the node where this service should run. Compatible Web/native hosts show which optional service dependencies are installed, disabled or incompatible. Installing Web is not required to keep this service running.

For an owner-operated Core CLI installation:

```sh
delta call packages.install --json '{"id":"dev.delta.updater"}'
```

Use **Settings → Updates** in a compatible host to inspect per-node versions, run a check, review availability and explicitly install an update. Automatic installation is off by default and requires explicit opt-in. Missing/offline/unmanaged components remain unavailable rather than being treated as successfully updated. Core/Web restarts can temporarily interrupt the UI. This service does not implement Desktop/Android application-binary self-update or independent signed UI activation.

The supervisor owns service startup. Do not run a second manual copy against an active managed profile. Back up the profile before migration or incompatible upgrades; uninstalling a UI client is not a data backup.

## Runtime

Requires Node.js 22+ and Delta Core >=0.4.3 <0.5.0. Run `npm ci --omit=dev`, then `npm start` with `DELTA_HOME`, `DELTA_URL`, and a service `DELTA_TOKEN`. Executable services are trusted host code, not an OS sandbox.

## API

- `updater.status`
- `updater.check`
- `updater.settings`
- `updater.install`
- `updater.notes`
- `updater.mark`

Core authenticates API calls. Forwarded calls retain the original principal through a live, component-bound invocation; the caller is never trusted from JSON arguments. A caller must be authorized for both the compatibility endpoint and the destination capability. Existing owner access is unchanged; narrowly scoped keys may need the new service scopes.

## Data and migration

Update preferences, jobs and receipts retain their existing `DELTA_HOME/data/updates` location. The installer and core bootstrap remain responsible for safe package activation. SHA-256 verification is not publisher signing.

## Development and verification

Run `npm ci` and `npm test` in this repository. Direct `npm start` is for a deliberately configured service environment; an ordinary UI client should not receive its service credential.


Automated tests use isolated fixtures. Physical desktop restart, phone lifecycle, and production VPS acceptance are not implied by a passing test suite.
