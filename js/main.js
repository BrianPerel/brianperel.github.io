/* This js file will define my website's navbar link labels and page references */

// Append the link element for favicon to the head of all html files
document.head.appendChild(Object.assign(document.createElement('link'), {
  rel: 'icon',
  href: 'img/favicon.ico',
  type: 'image/x-icon'
}));

// Defines all the meta tags and data to be used for all html files
const metaTags = [
  {name: "charset", content: "utf-8"},
  {name: "author", content: "Brian Perel"},
  {name: "description", content: "e-Portfolio"},
  {name: "Content-Type", content: "text/html"},
  {name: "http-equiv", content: "X-UA-Compatible", "content": "ie=edge"},
  {name: "viewport", content: "width=device-width, initial-scale=1"}
];

// Loop through and create each meta tag dynamically and add it to the html file's head section
metaTags.forEach(tag => {
  const metaTag = document.createElement('meta');
  for (let key in tag) {
    metaTag.setAttribute(key, tag[key]);
  }
  document.head.appendChild(metaTag);
});

// navbar link labels
const linkOne = "Home";
const linkTwo = "Side Projects";
const linkThree = "Calisthenics";
const linkFour = "School Projects";
const linkFive = "School Websites";
const linkSix = "Graphic Design";

// navbar link paths
const linkOnePath = "index.htm";
const linkTwoPath = "side_projects.htm";
const linkThreePath = "calisthenics.htm";
const linkFourPath = "websites.htm";
const linkFivePath = "gd_portfolio/controller.htm";

// school projects sublinks
const subLinkOne = "ATM app";
const subLinkTwo = "Employee Data App";
const subLinkThree = "Business Database";
const subLinkFour = "Ftp Simulator";

// school projects sublink paths
const sublinkOnePath = "project1.htm";
const sublinkTwoPath = "project2.htm";
const sublinkThreePath = "project3.htm";
const sublinkFourPath = "project4.htm";

// other site text variable definitions
const backToTopBtnText = "&nbsp;Back to top";
const footerText = `&copy;&nbsp;${new Date().getFullYear()}&nbsp;created by Brian Perel`;
