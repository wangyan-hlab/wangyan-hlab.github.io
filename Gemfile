source "https://rubygems.org"

# ------------------------------------------------------------------
# Jekyll dependency policy
# ------------------------------------------------------------------
# This site is built and served by GitHub Pages, which runs a fixed
# bundle locked by the `github-pages` gem. Upgrading Jekyll, kramdown,
# rouge, or liquid here will NOT take effect on the deployed site and
# will silently desync local builds from production. We therefore pin
# the entire stack through `github-pages` instead of declaring Jekyll
# or its plugins directly.
#
# Note: the `github-pages` gem is itself in long-term maintenance —
# GitHub announced it has moved to a newer build pipeline. If you
# need a newer Jekyll, consider migrating to GitHub Actions builds.
# ------------------------------------------------------------------

gem "github-pages", group: :jekyll_plugins

# Windows-only file system watcher (kept from upstream template).
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Jekyll plugins used by the site. These are already pulled in by
# `github-pages`, so pinning them here is mostly documentation.
group :jekyll_plugins do
  # gem "jekyll-archives"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "hawkins"
end
