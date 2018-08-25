import { Portfolio } from '..';
export const PortfolioData: Portfolio = {
    firstName: 'Ainel',
    middleName: '',
    lastName: 'Sanchez Gonzalez',
    subheading: 'Software Developer',
    socialMedia: [
      {
        icon: 'fa fa-linkedin fa-2x',
        link: 'https://www.linkedin.com/in/ainel-sanchez-2008a5b9/',
        color: '#0077B5'
      },
      {
        icon: 'fa fa-github fa-2x',
        link: 'https://github.com/Aisangon',
        color: '#6e5494'
      },
      ],
    introduction: 'Hi! My name is Ainel, I\'m a software developer currently living in Berlin, Germany.',
    changeLog: [
      {
        color: '#10A2F5',
        month: 'February',
        year: 2018,
        highlight: 'I started my first course in Web Developement',
        details: 'My passion for tech was born!',
      },
      {
        color: '#10A2F5',
        month: 'July',
        year: 2018,
        highlight: '6 months since I started coding',
        details: 'It\'s been one of the best decisions in my life',
      },
      {
        color: '#10A2F5',
        month: 'August',
        year: 2018,
        highlight: 'I received my first Job offer as a Junior Developer',
        details: 'I was so happy! All the intense work has paid off!',
      },

    ],
    updates: [
      {
        description: 'I build my portfolio site: yourdevelover.com',
        link: 'https://yourdevelover.com'
      },
      {
        description: 'I participated in a fun workshop about Vue.Js',
        link: ''
      },
    ],
    // tslint:disable-next-line:max-line-length
    speakerBio: 'Hi! My name is Ainel, I\'m a software developer currently living in Berlin, Germany. My passion is to be a creator of the positive impact that technology can provide to our everyday lifes'
};
