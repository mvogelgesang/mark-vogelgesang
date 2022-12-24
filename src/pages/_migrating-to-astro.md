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

Recommend starting by following the tutorial at https://docs.astro.build/en/tutorial/0-introduction/, this will simplify the process. Compared to other tutorials or "getting started" pages, this one gives you activities to complete and ways to test your knowledge. Much more interactive than the copy/paste tutorials.

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
- Went to work on index.astro, I had a primary wrapper class for body main called "main" and added it. This started to make the site look more like my old one

Blog Post Content 
- Home content
  - stripped out pre-existing astro content and replaced with a function to list content in the `pages/blog` folder
- Blog Post Page
  - Migrated styles into BlogPost.astro layout file
- Updated BaseHead.astro to include site name along with page title in <title> as well as meta title  
- At this point, I found inconsistent implementation between index.astro and layouts/BlogPost.astro- specifically with font variants.  In my case, the two layouts were not so different and could leverage a common layout.
- I created a layout called PageWrapper, it took two props, title and description with defaults tied to site config values.
- From there, I stripped down the BlogPost.astro layout that was auto generated and used PageWrapper around it.
- Doing this simplified the BlogPost layout and made it easier to read

Blog Post MDX, Embeds, and Images
- A couple of my previous articles leveraged MDX, Prism, or github/gist embeds. This had to be resolved.

- Use of FontAwesomeIcon component was switched for inline `<i>` tags
- shorthand gist embeds were switched to inline `<script>` embeds
- I ditched prism for shiki which is Astro's built in highlighter. I lost line numbers though. Down the road, I'd like to rebuild the CodeBlock.jsx component but that is for another day.

Generating Tag pages
- the tutorial at https://docs.astro.build/en/tutorial/5-astro-api/1/ explains it much better than I can. In short, this is very doable and the resulting code is much shorter than Gatsby

Resources
- Astro documentation
- https://rodneylab.com/astro-js-sass-styling/