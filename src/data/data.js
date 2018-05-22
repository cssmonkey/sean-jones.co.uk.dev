const colors = ['navy','blue','purple','maroon','black'];
const colorsLength = colors.length;

module.exports = {
    helloBanner: {
        main: 'Hello, my name is Sean Jones',
        secondary: 'I\'m a Front end Developer based in Glasgow, Scotland'
    },
    homepage: {
        availableFrom: 'August 2018',
        skills: {
            development: [
                { 
                    text: 'Accessibility',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white'
                }, 
                { 
                    text: 'CSS',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white'
                }, 
                { 
                    text: 'JavaScript',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white'
                },
                { 
                    text: 'Progressive Enhancement',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'Responsive Design',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'Test Driven Development',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white'
                }
            ],
            tools: [
                { 
                    text: 'Babel',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'GIT',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'Gulp',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'Mocha',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'NodeJS',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'React',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'Redux',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'SASS',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'jQuery',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white'
                }, 
                { 
                    text: 'Webpack',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }, 
                { 
                    text: 'patternlab',
                    color: 'u-bg-' + colors[Math.floor(Math.random()*colorsLength)] + '-text-white' 
                }
            ]
        }
    },
    cv: {
        skills: [
            'HTML5',
            'JavaScript',
            'jQuery',
            'CSS/SASS',
            'React',
            'EmberJS',
            'GIT',
            'Test driven development with Karma, Mocha and Chai',
            'Gulp',
            'Webpack',
            'Design systems including Patter Lab and SC5'
        ],
        workHistory: [
            {
                title: 'Clydesdale Bank - Contract Web Developer',
                date: 'Oct 2017 - Present',
            },
            {
                title: 'EmergeAdapt - Contract Web Developer',
                date: 'Sept 2016 - Oct 2017'
            },
            {
                title: 'Prudential Assurance - Contract Web Developer',
                date: 'Mar 2016 - Sept 2016'
            },
            {
                title: 'EmergeAdapt - Contract Web Developer',
                date: 'Oct 2015 - Mar 2016',
                details: '<p>asdfa</p>'
            },
            {
                title: 'AECOM - Web Developer(Freelance)',
                date: 'Sept 2015 - Oct 2015',
            },
            {
                title: 'Equator - Front end Developer, Development Team Leader',
                date: 'March 2008 - Sept 2015'
            },
            {
                title: 'GRP - Designer, Front end Developer',
                date: '2006 - 2008'
            }
        ],
        education: [
            {
                title: 'Microsoft Certified Professional',
                date: '2013',
                details: '<p>Programming in HTML5 with JavaScript and CSS3</p>'
            },
            {
                title: 'Glasgow Caledonian University',
                date: '2003 - 2005',
                details: '<p>BA (Hons), Applied Graphics Technology with Multimedia</p>'
            },
            {
                title: 'Aberdeen College',
                date: '2000 - 2002',
                details: '<p>HND, Graphic Design with Multimedia</p>'
            }
        ]
    }
}