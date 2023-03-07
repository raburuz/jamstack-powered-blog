/**
 * Here you can config your blog quickly
 * app : 
 *     name: application name 
 *     label: application message
 *     icon: your flaticon in your public folder, can be svg
 *     welcomeMessage: show welcome message in sidebar   
 *     description: show blog description in sidebar. We recommend 80-150 characters
 *     domain: this is only to show your link in sidebar  
 * 
 * owner: 
 *      name: Your name
 *      description: summary who you are
 *      photo_url: your photo / selfie in public folder
 *      twitter: twitter username without @
 *      github: github username without @
 *      content: your full description, what are you doing, etc...
 *              Must be a string array and html output is a paragraph
 * 
 * Note if your wanna change your meta tags, like description or title,
 * we recommend go to the respective page in --Pages folder-- 
 */
export const config = {
  app: {
    name: 'Δrkift',
    label:'blog',
    icon: '/flaticon.png',
    welcomeMessage:'Welcome',
    description: `
      My passion is building software 
      that empowers people to reach their goals. 
      With every line of code, I strive to make progress achievable and success inevitable
    `,
    domain: 'https://arkift.com',
  },
  owner:{
    name:'Jean Ramírez',
    description:`
    Hey, I'm Jean. I'm Software Developer, my passion is building software that empowers people to reach their goals.
    `,
    photo_url:'/man.png',
    twitter:'arkift_r',
    github:'raburuz',
    content:[
      `
        Passionate web developer with a focus on creating innovative 
        solutions. My main goal is to build intuitive and 
        user-friendly applications and websites to enhance the user 
        experience.
      `,
      `
        With experience in programming languages, I am always seeking
        new challenges and opportunities to learn and improve my
        skills. I love working in a team and collaborating with
        other professionals to create effective and efficient
        solutions.
      `,
      `
        If you are looking for a dedicated, creative, and committed
        web developer who strives for excellence in their work, do
        not hesitate to contact us. We are eager to work together
        on your next web project!
      `
    ],
  }
}