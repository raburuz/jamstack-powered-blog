

<p align="center">
  <a href="https://twitter.com/arkift_r">
    <img src="https://pbs.twimg.com/profile_images/1632833475454590984/Rc9lwNYz_400x400.jpg" height="96">
    <h3 align="center">Jamstack-powered Blog</h3>
    <p>No database required*</p>
  </a>
</p>
<br/>

# Jamstack-powered Blog built with Next & Typescript🚀

Welcome to our Jamstack-powered Blog built with Next!

Jamstack-powered blog is designed to deliver a fast and seamless experience to our readers, 
using the latest technologies and development practices. With Jamstack, 
we can leverage the power of pre-built static assets to deliver a lightning-fast browsing experience.

Built with Next.js, Jamstack-powered blog benefits from the powerful features of React, including server-side rendering 
and easy component-based architecture. This allows us to deliver rich, interactive content while 
ensuring maximum performance and scalability.

Jamstack-powered blog is designed to be fully responsive, ensuring that readers can enjoy the same great experience on any 
device. We also prioritize accessibility, making sure that the content is easily accessible to all readers, 
regardless of their ability.

We believe that a great blog isn't just about the content - it's about the experience. 
That's why we've built Jamstack-powered blog with Jamstack and Next.js, to deliver a fast, seamless 
experience that keeps readers coming back for more.

## Structure

Projects Structure
```
projects (Here tou can add new modules such as auth, dashboard, subscriptions)
└───blogger
|   |
|   └───components
|   |   |
|   |   └───Entry.tsx
|   |   |
|   |   └───Navbar.tsx
|   |   |
|   |   └───Sidebar.tsx
|   |
|   └───layout
|   |   |
|   |   └───LBlog.tsx (layout Blog)
|   |   
|   └───lib
|   |   |
|   |   └───mdx.ts (All the Markdown / Jamstack Logic)
|   |
|   └───pages
|   |   |
|   |   └───Blogger.tsx
|   |   |
|   |   └───Post.tsx
|   |   |
|   |   └───Me.tsx
|   |
|   | index.ts
|   
└───common (All common logic / components / etc...)
|   | Seo.tsx
|   | index.ts
|
└───hooks (All Your Custom Hooks)
|   | useOutside.ts
|   | index.ts
|
|
└───environment 
|   | config.ts (All configuration that your blog need)
|
└───[your-new-module] 
```

Pages Structure
```
pages
└───api
└───app
│   │   index.tsx
│   │   me.tsx
│   │   about.tsx     
│
│
└───post
    │   [slug].tsx
```

Markdown Documents
```
docs
└───[slug].mdx
```

## Getting Started 

Clone this repository
```bash
git clone https://github.com/raburuz/jamstack-powered-blog
```

Install dependencies
```bash
npm i
```

Run the development server
```bash
npm run dev
```

## Configure your blog

First, go to the configuration file

```bash
 projects
 └───environment
      | config.ts
```

Now, you can change all parameters that is available for you on this file.
Note: To change your theme you can check [DaisyUI](https://daisyui.com/docs/themes/)

## Create Your First Post

1. Go to docs directory
2. Create a new file with .mdx extension
```
[slug-name].mdx

For example: hello-world.mdx
```
3. Go to your new markdown document and write the metadata
```
---
title: My first Markdown/MDX document
author: Jean Ramirez
description: One nice description
date: 'Jan 2'
readTime: '15 minutes'
showDesc: false
---
```
4. Now, Write your content
```
# Hello World
I **love** using [Next.js](https://nextjs.org/)
```
5. Your markdown document look like this:

```
---
title: Markdown/MDX with Next.js
author: Jean Ramirez
description: Jean Ramirez
date: 'Jan 2'
readTime: '15 minutes'
showDesc: false
---

# Hello World
I **love** using [Next.js](https://nextjs.org/)
```

6. Output:

```
<h1>Hello World</h1>
<p>I <b>love</b> using <a href="https://nextjs.org">Next.js</a></p>
```



## Deploy to Vercel

1. Create a new Github repository and push your local changes.
2. [Deploy to vercel](https://vercel.com/docs/concepts/deployments/git#deploying-a-git-repository).
3. In your Vercel project, add your custom domain or use one assign by vercel.


## Built on open source

This working demo site was built using the Jamstack-powered Blog built with Next and:

* [NextJs](https://nextjs.org/) as the React framework
* [Tailwind](https://tailwindcss.com/)  for CSS styling
* [DaisyUI](https://daisyui.com/) for tailwind theme
* [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote#readme) for markdown
* [Gray Matter](https://github.com/jonschlinkert/gray-matter) for metadata in Markdown
* [Vercel](https://vercel.com/) for deployment
* [Vercel Analytics](https://vercel.com/docs/concepts/analytics) for Analytics


## Author

Jean Ram ([@arkift_r](https://twitter.com/arkift_r))

## License 

The MIT License.




