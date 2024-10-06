/* This js file will define my website's navbar link labels and page references */

// Append the link element for favicon to the head of all project html files
document.head.appendChild(Object.assign(document.createElement('link'), {
  rel: 'icon',
  href: 'img/favicon.ico',
  type: 'image/x-icon'
}));

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
const linkFivePath = "gd_portfolio/Controller.htm";

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
