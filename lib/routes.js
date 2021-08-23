import {
  Annotation,
  BookOpen,
  Bookmark,
  Calendar,
  ChartBar,
  Chat,
  Clock,
  Collection,
  ColorSwatch,
  CurrencyDollar,
  Exclamation,
  Home,
  InformationCircle,
  LocationMarker,
  LockClosed,
  Menu,
  Newspaper,
  Photograph,
  Play,
  QuestionMarkCircle,
  Speakerphone,
  Tag,
  Template,
  Ticket,
  UserGroup,
  ViewBoards
} from "icons/solid";

const size = 18;

export const routes = [
  {
    path: "/",
    name: "overview",
    icon: <Home width={size} height={size} />,
  },
  {
    path: "/pricing",
    name: "pricing",
    icon: <Tag width={size} height={size} />,
  },
  {
    path: "/calendar",
    name: "calendar",
    icon: <Calendar width={size} height={size} />,
  },
  {
    name: "authentication",
    icon: <LockClosed width={size} height={size} />,
    children: [
      {
        path: "/signin",
        name: "signin",
      },
      {
        path: "/signup",
        name: "signup",
      },
      {
        path: "/forgot",
        name: "forgot",
      },
      {
        path: "/lockscreen",
        name: "lockscreen",
      },
    ],
  },
  {
    path: "/coming-soon",
    name: "comingSoon",
    icon: <Clock width={size} height={size} />,
  },
  {
    path: "/faq",
    name: "faq",
    icon: <InformationCircle width={size} height={size} />,
  },
  {
    name: "error",
    icon: <Exclamation width={size} height={size} />,
    children: [
      {
        path: "/404",
        name: "404",
      },
      {
        path: "/500",
        name: "error",
      },
    ],
  },
  {
    path: "/maintenance",
    name: "maintenanceMode",
    icon: <Speakerphone width={size} height={size} />,
  },
  {
    path: "/landing",
    name: "landingPage",
    icon: <Collection width={size} height={size} />,
  },
  {
    divider: true,
    name: 'documentation'
  },
  {
    name: "documentation",
    icon: <QuestionMarkCircle width={size} height={size} />,
    children: [
      {
        path: "/documentation/introduction",
        name: "introduction",
      },
      {
        path: "/documentation/getting-started",
        name: "gettingStarted",
      },
      {
        path: "/documentation/routes",
        name: "routes",
      },
      {
        path: "/documentation/options",
        name: "options",
      },
      {
        path: "/documentation/translation",
        name: "translation",
      },
      {
        path: "/documentation/helpers",
        name: "helpers",
      },
      {
        path: "/documentation/icons",
        name: "icons",
      },
      {
        path: "/documentation/credits",
        name: "credits",
      },
    ],
  },
  {
    name: "menu",
    icon: <Menu width={size} height={size} />,
    children: [
      {
        name: "menu",
        children: [
          {
            name: "menu",
            children: [
              {
                name: "menu",
              },
              {
                name: "menu",
              },
            ],
          },
          {
            name: "menu",
          },
        ],
      },
      {
        name: "menu",
        children: [
          {
            name: "menu",
          },
          {
            name: "menu",
            children: [
              {
                name: "menu",
              },
              {
                name: "menu",
              },
            ],
          },
        ],
      },
    ],
  },
];
