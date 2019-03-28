export const configuration = {
    header : {
        heading: 'My website',
        headingtext: 'enjoy navigating through the pages of my website',
        buttontext:'do some action',
        buttonlink: '/Home'
      },
    intro : {
        tagline: 'SUCCESS',
        title: 'How We Help You To Sell Your Product' ,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
        features: [
          {icon:'html5', title: 'HTML5 & CSS3', description: 'a good language for development'},
          {icon:'bolt', title: 'Easy to use', description: 'a good language for development'},
          {icon:'tablet', title: 'Fully responsive', description: 'a good language for development'},
          {icon:'rocket', title: 'Parallax Effect', description: 'a good language for development'},
        ]  
    },
    services : {
      tagline: 'BELIEVING',
      title: 'fOCUSING ON WHAT MATTERS MOST' ,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '  
    },
    testimonials : {
      tagline: 'FEEDBACK',
      title: 'WHAT OUR CUSTOMERS ARE SAYING' ,
      description: '',
      feedbacks: [
        {name:'John Doe', userimage:'user-1.jpg', comments:'I am happy', company:'ABC'},
        {name:'Rosa Doe', userimage:'user-2.jpg', comments:'I am fine', company:'EFG'},
        {name:'Tony Doe', userimage:'user-3.jpg', comments:'I am sorry', company:'HIJ'}
      ]  
    },
    clients : {
      tagline: 'TRUST',
      title: 'COMPANIES WHO USE OUR SERVICES' ,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
      companies: [
        {name: 'tree', weblink:'company-logo1.png', logo:'company-logo1.png'},
        {name: 'fingerprint', weblink:'company-logo2.png', logo:'company-logo2.png'},
        {name: 'the man', weblink:'company-logo3.png', logo:'company-logo3.png'},
        {name: 'mustache', weblink:'company-logo4.png', logo:'company-logo4.png'},
        {name: 'goat', weblink:'company-logo5.png', logo:'company-logo5.png'},
        {name: 'justice', weblink:'company-logo6.png', logo:'company-logo6.png'},
        {name: 'ball', weblink:'company-logo7.png', logo:'company-logo7.png'},
        {name: 'cold', weblink:'company-logo8.png', logo:'company-logo8.png'},
        {name: 'cold', weblink:'company-logo9.png', logo:'company-logo9.png'},
      ]  
    },
    pricing : {
      tagline: 'YOUR CHOICE',
      title: 'WE HAVE THE RIGHT PACKAGE FOR YOU' ,
      description: ''  ,
      plans: [
        {title: 'PERSONAL', subtitle: 'standard version', description: 'good for everyone',price:'19',currency:'$', feature: {downloads:'5 downloads',extensions:'2 extensions', tutorials:'tutos',support:'forum support',updates:'1 year free update'}, buttontext: 'Buy Now', buttonlink:'#', featured: true},
        {title: 'STUDENT', subtitle: 'popular choice', description: 'good for student',price:'29',currency:'$', feature: {downloads:'15 downloads',extensions:'5 extensions', tutorials:'tutos with files',support:'forum support',updates:'2 year free update'}, buttontext: 'Buy Now', buttonlink:'#', featured: true},
        {title: 'BUSINESS', subtitle: 'whole team', description: 'good for business',price:'49',currency:'$', feature: {downloads:'unlimited downloads',extensions:'unlimited extensions', tutorials:'tutos with videos',support:'chat support',updates:'unlimited updates'}, buttontext: 'Buy Now', buttonlink:'#', featured: true}
      ]
    },
    gallery: {
      images: [
        'gallery-image-1.jpg',
        'gallery-image-2.jpg',
        'gallery-image-3.jpg',
        'gallery-image-4.jpg',
        'gallery-image-5.jpg',
        'gallery-image-6.jpg'
      ]
    },
    footer: {
      copyrightText: "Made with love by ",
      developer: 'MOHAMED TAHER GRATI',
      developerLink:'https://mohamedtahergrati.github.io/'
    },
    socialsites: [
      {link: 'https://www.facebook.com/', title: 'Facebook', target:'_blank', username:'mohamed.taher.grati', icon:'facebook'},
      {link: 'https://google.com/+',title: 'Google+', target:'_blank', username:'mohamed.taher.grati', icon:'google-plus'},
      {link: 'https://www.twitter.com/',title: 'Twitter', target:'_blank', username:'mohamed taher grati', icon:'twitter'},
      {link: 'https://www.instagram.com',title: 'Instagram', target:'_blank', username:'mohamed taher grati', icon:'instagram'}
    ],
    blog: {
      tagline: 'MY BLOG',
      title: 'Thoughts are great',
      posts: [
        {id: 1, title: 'The first article', author: 'AD',image: 'gallery-image-1.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 1'},
        {id: 2, title: 'The second article', author: 'AD',image: 'gallery-image-2.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 2'},
        {id: 3, title: 'The third article', author: 'AD',image: 'gallery-image-3.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 3'},
        {id: 4, title: 'The fourth article', author: 'AD',image: 'gallery-image-4.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 4'},
        {id: 5, title: 'The fifth article', author: 'AD',image: 'gallery-image-5.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 5'},
        {id: 6, title: 'The sixth article', author: 'AD',image: 'gallery-image-6.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 6'},
        {id: 7, title: 'The seventh article', author: 'AD',image: 'gallery-image-1.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 7'},
        {id: 8, title: 'The eight article', author: 'AD',image: 'gallery-image-2.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 8'},
        {id: 9, title: 'The nine article', author: 'AD',image: 'gallery-image-3.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 9'},
        {id: 10, title: 'The tenth article', author: 'AD',image: 'gallery-image-4.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 10'},
        {id: 11, title: 'The eleventh article', author: 'AD',image: 'gallery-image-5.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 11'},
        {id: 11, title: 'The twelve article', author: 'AD',image: 'gallery-image-6.jpg', publishdate:'2028-06-19T07:22Z' , excert:'This is the summary of article 12'}
      ]
    }
};