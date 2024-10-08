export default {
  sidebar: {
    defaultMenuCollapsed: false, // Ensures the sidebar is expanded by default
  },

  navs: [
    {
      url: "https://deskbox.co",
      name: "Deskbox",
      newWindow: true,
    },
  ],

  project: {
    link: "https://deskbox.co",
  },

  feedback: true,
  editLink: true,

  useNextSeoProps() {
    return {
      titleTemplate: "%s – SWR",
    };
  },

  logo: (
    <>
      <svg
        style={{ marginTop: "0.2em" }}
        width="20"
        height="20"
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="170"
          cy="180"
          r="150"
          stroke="#5423E7"
          stroke-width="40"
          stroke-linecap="round"
          stroke-linejoin="bevel"
          stroke-dasharray="50 50"
        />
      </svg>

      <span
        style={{
          marginLeft: ".2em",
          marginTop: "0",
          fontWeight: 800,
          fontSize: 24,
          color: "#5423E7",
        }}
      >
        Deskbox
      </span>
    </>
  ),

  readMore: "Read More",

  navigation: {
    prev: true,
    next: true,
  },

  // ... other theme options
};
