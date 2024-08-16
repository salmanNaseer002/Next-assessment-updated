export type TabData = {
  title: string;
  description: string;
  stats: {
    used: number;
    type: string;
    pages: number;
  };
  tags: string[];
  lastUpdated: string;
  BusinessQuestions?: {
    title: string;
    description: string;
  }[];
};

type ModalData = {
  [key: string]: TabData;
  Featured: TabData;
  KPI: TabData;
  Layouts: TabData;
  Storyboards: TabData;
};

const modalData: ModalData = {
  Featured: {
    title: "INTES",
    description: "A detailed description of the featured item.",
    stats: {
      used: 2485,
      type: "Layout",
      pages: 10,
    },
    tags: ["comms", "coverage", "stackholders"],
    lastUpdated: "2024-07-23",
    BusinessQuestions: [
      {
        title: "Question 1",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 2",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 3",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 4",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
    ],
  },
  
  KPI: {
    title: "KPIs",
    description: "Key performance indicators for monthly sales.",
    stats: {
      used: 300,
      type: "KPI",
      pages: 10,
    },
    tags: ["sales", "KPI", "monthly"],
    lastUpdated: "2024-08-05",
    BusinessQuestions: [
      {
        title: "Question 1",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 2",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 3",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 4",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
    ],
  },

  Layouts: {
    title: "Sales Dashboard",
    description: "An overview of the sales metrics.",
    stats: {
      used: 120,
      type: "Dashboard",
      pages: 12,
    },
    tags: ["sales", "dashboard", "report"],
    lastUpdated: "2024-08-10",
    BusinessQuestions: [
      {
        title: "Question 1",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 2",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 3",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 4",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
    ],
  },

  Storyboards: {
    title: "Product Launch Storyboard",
    description: "Storyboard for the upcoming product launch.",
    stats: {
      used: 50,
      type: "Storyboard",
      pages: 5,
    },
    tags: ["product", "launch", "storyboard"],
    lastUpdated: "2024-07-18",
    BusinessQuestions: [
      {
        title: "Question 1",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 2",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 3",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
      {
        title: "Question 4",
        description: "The expected ROI is projected to be 15% over the next year.",
      },
    ],
  }
};

export default modalData;
