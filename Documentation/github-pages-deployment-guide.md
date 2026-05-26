# GitHub Pages Deployment Guide

This guide documents how this portfolio was deployed online for free using GitHub Pages.

Live site:

```text
https://salimshre.github.io/react-portfolio/
```

Repository:

```text
https://github.com/salimshre/react-portfolio
```

## What Was Done

1. Built the Vite React app locally.
2. Published the generated `dist/` folder to a `gh-pages` branch.
3. Enabled GitHub Pages with:
   - Source branch: `gh-pages`
   - Folder: `/`
4. Verified that the live URL returned `200 OK`.

## Why `gh-pages` Branch Was Used

The first workflow tried to deploy with GitHub Actions Pages artifact deployment.
That requires the repository's Pages source to be set to `GitHub Actions`.

The repository was instead configured successfully with the classic GitHub Pages source:

```text
Branch: gh-pages
Folder: /
```

This is simple and reliable for static Vite output.

## Manual Deployment Steps

Run these commands from the repository root.

### 1. Install Dependencies

```bash
npm install
```

If dependencies are already installed, this step can be skipped.

### 2. Build the Site

```bash
npm run build
```

This creates the production site in:

```text
dist/
```

### 3. Create a Temporary Publish Folder

On PowerShell:

```powershell
$target = ".gh-pages-publish"
if (Test-Path $target) {
  Remove-Item -Recurse -Force -LiteralPath $target
}
New-Item -ItemType Directory -Path $target | Out-Null
Copy-Item -Recurse -Path .\dist\* -Destination $target
New-Item -ItemType File -Path (Join-Path $target ".nojekyll") -Force | Out-Null
```

The `.nojekyll` file tells GitHub Pages to serve files exactly as built.

### 4. Create a Git Commit for the Static Files

```powershell
Set-Location .gh-pages-publish
git init
git add .
git -c user.name="Salim Shrestha" -c user.email="113753193+salimshre@users.noreply.github.com" commit -m "Deploy portfolio to GitHub Pages"
```

### 5. Push to `gh-pages`

```powershell
git remote add origin https://github.com/salimshre/react-portfolio.git
git push -f origin master:gh-pages
```

If Git reports a safe-directory or ownership error, use:

```powershell
git -c safe.directory=C:/Users/StudyAcer/Documents/GitHub/react-portfolio/.gh-pages-publish push -f origin master:gh-pages
```

### 6. Enable GitHub Pages

In GitHub:

1. Open the repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/`
5. Save.

After GitHub finishes building, the site will be available at:

```text
https://salimshre.github.io/react-portfolio/
```

## Verify the Deployment

Open:

```text
https://salimshre.github.io/react-portfolio/
```

Or check with PowerShell:

```powershell
$r = Invoke-WebRequest -Uri "https://salimshre.github.io/react-portfolio/" -UseBasicParsing
$r.StatusCode
```

Expected output:

```text
200
```

## Future Automatic Deployment

The repository includes a workflow at:

```text
.github/workflows/deploy.yml
```

It builds the app and publishes `dist/` to the `gh-pages` branch whenever code is pushed to `dev`.

The workflow uses:

```yaml
peaceiris/actions-gh-pages@v4
```

For the workflow to keep working, GitHub Pages should remain configured to serve from:

```text
Branch: gh-pages
Folder: /
```

## Common Problems

### Blank Page After Deployment

For GitHub Pages project sites, asset paths must work under:

```text
/react-portfolio/
```

This project uses:

```js
base: "./"
```

in `vite.config.js`, which makes the built assets load correctly from the GitHub Pages subpath.

### GitHub Pages Shows 404

Check these items:

1. The `gh-pages` branch exists.
2. The branch contains `index.html` at the root.
3. GitHub Pages is enabled in `Settings > Pages`.
4. Source is set to `Deploy from a branch`.
5. Branch is set to `gh-pages` and folder is `/`.

### GitHub Actions Pages Workflow Fails

Do not use `actions/deploy-pages` unless Pages source is set to `GitHub Actions`.

For this repository, use the `gh-pages` branch deployment workflow instead.

## Cleanup After Manual Deployment

After pushing, the temporary folder can be deleted:

```powershell
Set-Location ..
Remove-Item -Recurse -Force -LiteralPath .\.gh-pages-publish
```
