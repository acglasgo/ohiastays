# Ohia Stays

Source for ohiastays.com and its market-level guest guidebook subdomains.

## Structure

Each top-level folder is deployed as its own Cloudflare Pages project:

| Folder | Pages project | Domain |
|---|---|---|
| `root/` | ohiastays-root | ohiastays.com |
| `lakeway/` | ohiastays-lakeway | lakeway.ohiastays.com |
| `chelan/` | ohiastays-chelan | chelan.ohiastays.com |
| `austin/` | ohiastays-austin | austin.ohiastays.com |
| `sagecliffe/` | ohiastays-sagecliffe | sagecliffe.ohiastays.com |

Each market folder holds the shared guidebook content for that area (restaurants,
things to do, local tips) plus a subdirectory per property for the pre-arrival
Things to Do page and private guest guidebook.

Example per-property layout under a market folder:

```
lakeway/
  index.html                  # Market-level guidebook (shared)
  top5-restaurants/           # Top 5 pages, one per category
  top5-coffee/
  <property-slug>/
    index.html                # Pre-arrival Things to Do page
    guidebook/index.html      # Private guest guidebook
```

## Deploying

Pushing to `main` triggers Cloudflare Pages to redeploy whichever projects have
changed files under their root directory.
