# Ohia Stays

Source for ohiastays.com and its market-level guest guidebook subdomains.

## How it works

One Cloudflare Worker (`ohiastays`) serves all 5 subdomains. The Worker looks at
the request hostname and serves files from the matching folder under `sites/`:

| Hostname | Folder served |
|---|---|
| ohiastays.com / www | sites/root/ |
| lakeway.ohiastays.com | sites/lakeway/ |
| chelan.ohiastays.com | sites/chelan/ |
| austin.ohiastays.com | sites/austin/ |
| thegorge.ohiastays.com | sites/thegorge/ |

Each market folder holds the shared guidebook content for that area (restaurants,
things to do, local tips) plus a subdirectory per property for the pre-arrival
Things to Do page and private guest guidebook.

Example per-property layout:

```
sites/lakeway/
  index.html                  # Market-level guidebook (shared)
  top5-restaurants/           # Top 5 pages, one per category
  top5-coffee/
  <property-slug>/
    index.html                # Pre-arrival Things to Do page
    guidebook/index.html      # Private guest guidebook
```

## Repo layout

```
src/index.js       # Worker — routes hostname → folder
wrangler.toml      # Cloudflare config (assets = ./sites)
sites/             # All served content lives here
```

## Deploying

Pushing to `main` triggers Cloudflare to redeploy the Worker. The routing map
lives in `src/index.js`; add a new entry there when adding a new subdomain.
