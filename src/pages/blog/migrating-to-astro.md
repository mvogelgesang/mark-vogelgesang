Steps to migrate from Gatsby to Astro

Reasons for switching
- gatsby offered a lot in the way of experience but I didnt need all the bells and whistles
- positive experience using astro at work
- it is super fast (include some boot up time metrics)
- wanted to leverage typescript throughout

Describe my gatsby site
- used SASS
- leveraged GISTS

What I wanted to keep the same
- url paths
- analytics
- fonts

Steps
- copied my gatsby src/ folder to a new folder called gatsbysrc/ `mv src/ gatsbysrc/`
  - also copied my gatsby-browser, gatsby-config, and gatsby-node, and package.json files into gatsbysrc
- deleted everything besides my firebase config files
- initialized new Astro project `npm create astro@latest`
- chose a personal website starter kit
- did not initialize new git repository, kept my pre-existing repo as I wanted long term traceability
- chose strict for typescript settings
- Copied over SASS from `gatsbysrc/styles/` to `src/styles/`
  - Installed SASS `npm install -D sass`
- Updated BaseHead.astro to include my central SASS file global.scss
- Updated astro.config.mjs and config.ts to point at my domain along with changing the site title and description
Running NPM start at this point results in
{{IMAGE}}

Start migrating navigation
- ported over NAVIGATION and SOCIALMEDIA content from gatsby-config.js into config.ts
- Included font-awesome in my BaseHead.astro
- I had a lot of inline js in my gatsby js file. This instead got pulled out into type-safe scripts

Footer
- created a footerlink component
- moved everything over and it went swimmingly

Fonts
- Was previously using `gatsby-plugin-google-fonts` but switched to fontsource at the recommendation of Astro
- Imported the desired font, Montserrat, and added its import statement to the BaseHead.astro file

Home Body
- Went to work on index.astro, I had a primary wrapper class for body main called "main" and added it.

Blog Post Content 
- Home content
  - stripped out pre-existing astro content and replaced with a function to list content in the `pages/blog` folder
- Blog Post Page
  - Migrated styles into BlogPost.astro layout file
- Updated BaseHead.astro to include site name along with page title in <title> as well as meta title  

Resources
- Astro documentation
- https://rodneylab.com/astro-js-sass-styling/