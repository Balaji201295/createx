import { FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  IoChatbubblesOutline,
  IoPhonePortraitOutline,
  IoLocationSharp,
} from "react-icons/io5";

import {
  Company_1,
  Company_10,
  Company_11,
  Company_12,
  Company_2,
  Company_3,
  Company_4,
  Company_5,
  Company_6,
  Company_7,
  Company_8,
  Company_9,
  CoreValue_1,
  CoreValue_2,
  CoreValue_3,
  CoreValue_4,
  Image_2,
  Image_3,
  Image_4,
  Image_5,
  Image_6,
  Image_7,
  Image_9,
  Program_1,
  Program_2,
  Program_3,
  Program_4,
  Program_5,
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
  Testimonial_4,
  Testimonial_5,
} from "../assets";
export const navItems = [
  {
    path: "/about-us",
    link: "about us",
  },
  {
    path: "/courses",
    link: "courses",
  },
  {
    path: "/events",
    link: "events",
  },
  {
    path: "/blogs",
    link: "blogs",
  },
  {
    path: "/contacts",
    link: "contacts",
  },
];

export const statistics = [
  {
    value: 1200,
    text: "Students graduated",
  },
  {
    value: 84,
    text: "Completed courses",
  },
  {
    value: 16,
    text: "Qualified tutors",
  },
  {
    value: 5,
    text: "Years of experience",
  },
];

export const aboutInfo = [
  {
    content: "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  },
  {
    content: "Vulputate placerat amet pulvinar lorem nisl.",
  },
  {
    content:
      "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
  },
  {
    content: "Etiam duis lobortis in fames ultrices commodo nibh.",
  },
  {
    content: "Tincidunt sagittis neque sem ac eget.",
  },
  {
    content:
      "Ultricies amet justo et eget quisque purus vulputate dapibus tortor.",
  },
];

export const benefits = [
  {
    icon: FaRegStar,
    category: "Experienced Tutors",
    title: "Only Experienced Tutors",
    content:
      "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
    imgUrl: Image_2,
  },
  {
    icon: FaRegThumbsUp,
    category: "Feedback & Support",
    title: "Only Feedback & Support",
    content:
      "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
    imgUrl: Image_6,
  },
  {
    icon: IoIosApps,
    category: "24/7 Online Library",
    title: "Only 24/7 Online Library",
    content:
      "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
    imgUrl: Image_7,
  },
  {
    icon: IoChatbubblesOutline,
    category: "Community",
    title: "Only Community",
    content:
      "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
    imgUrl: Image_9,
  },
];

export const socialLinks = [
  {
    icon: FaFacebook,
    url: "https://www.facebook.com",
  },
  {
    icon: FaTwitter,
    url: "https://www.twitter.com",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com",
  },
  {
    icon: FaTelegram,
    url: "https://www.telegram.com",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com",
  },
];

export const footerLinks = [
  {
    title: "site map",
    links: [
      {
        path: "/about-us",
        link: "about us",
      },
      {
        path: "/courses",
        link: "courses",
      },
      {
        path: "/events",
        link: "events",
      },
      {
        path: "/blogs",
        link: "blogs",
      },
      {
        path: "/contacts",
        link: "contacts",
      },
    ],
  },
  {
    title: "courses",
    links: [
      {
        path: "/marketing",
        link: "marketing",
      },
      {
        path: "/management",
        link: "management",
      },
      {
        path: "/hr-recruting",
        link: "hr & recruting",
      },
      {
        path: "/design",
        link: "design",
      },
      {
        path: "/development",
        link: "development",
      },
    ],
  },
];

export const testimonialItems = [
  {
    id: 1,
    imgUrl: Testimonial_1,
    name: "Paul Walker",
    designation: "CEO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.",
  },
  {
    id: 2,
    imgUrl: Testimonial_2,
    name: "Jake Paul",
    designation: "Co-Founder",
    content:
      "Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.",
  },
  {
    id: 3,
    imgUrl: Testimonial_3,
    name: "Logan paul",
    designation: "Head Of Department",
    content:
      "Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
  },
  {
    id: 4,
    imgUrl: Testimonial_4,
    name: "Ben Stokes",
    designation: "Senior Manager",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
  },
  {
    id: 5,
    imgUrl: Testimonial_5,
    name: "Joe Root",
    designation: "Senior Associate",
    content:
      "Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
  },
];

export const coreValues = [
  {
    icon: CoreValue_1,
    title: "Structured Approach",
    content:
      "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. ",
  },
  {
    icon: CoreValue_2,
    title: "Professional Feedbacks",
    content: "Culpa nostrud commodo ea consequat reprehenderit aliquip. ",
  },
  {
    icon: CoreValue_3,
    title: "Efficiency",
    content: "Viverra scelerisque consequat net. Adipisicing esse consequat. ",
  },
  {
    icon: CoreValue_4,
    title: "Flexible Shedule",
    content: "Aute eiusmod dolore dolore deserunt veniam ad deserunt. ",
  },
];

export const programs = [
  {
    imgUrl: Program_1,
    category: "Marketing",
    content:
      "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
  },
  {
    imgUrl: Program_2,
    category: "Management",
    content:
      "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
  },
  {
    imgUrl: Program_3,
    category: "HR & Recruiting",
    content:
      "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
  },
  {
    imgUrl: Program_4,
    category: "Design",
    content:
      "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
  },
  {
    imgUrl: Program_5,
    category: "Development",
    content:
      "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
  },
];

export const processes = [
  {
    title: "Watching online video lectures",
    content:
      "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
  },
  {
    title: "Passing test",
    content:
      "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. ",
  },
  {
    title: "Curator’s feedback",
    content:
      "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. ",
  },
  {
    title: "Corrections if needed",
    content:
      "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.",
  },
];

export const companies = [
  {
    imgUrl: Company_1,
  },
  {
    imgUrl: Company_2,
  },
  {
    imgUrl: Company_3,
  },
  {
    imgUrl: Company_4,
  },
  {
    imgUrl: Company_5,
  },
  {
    imgUrl: Company_6,
  },
  {
    imgUrl: Company_7,
  },
  {
    imgUrl: Company_8,
  },
  {
    imgUrl: Company_9,
  },
  {
    imgUrl: Company_10,
  },
  {
    imgUrl: Company_11,
  },
  {
    imgUrl: Company_12,
  },
];

export const contactDetails = [
  {
    icon: IoChatbubblesOutline,
    title: "Talk to us:",
    text: "hello@createx.com",
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Call us:",
    text: "(405) 555-0128",
  },
  {
    icon: IoLocationSharp,
    title: "Address:",
    text: "2464 Royal Ln. Mesa, New Jersey 45463, USA",
  },
];

export const learningCourses = [
  {
    number: 1,
    title: "Watching online video lectures",
    content:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    number: 2,
    title: "Passing test",
    content:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.",
  },
  {
    number: 3,
    title: "Curator’s feedback",
    content:
      "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
  },
  {
    number: 4,
    title: "Corrections if needed",
    content:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];

export const benefitsPoints = [
  {
    point: "Specialists with more than 1 year of active work experience",
  },
  {
    point:
      "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
  },
  {
    point: "Professional designers who want to feel more confident in UX",
  },
  {
    point:
      "Specialists who would like to structure their knowledge, fill in the gaps",
  },
];

export const accordion = [
  {
    question: "Aliquet lectus urna viverra in odio.",
    answer:
      "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.",
  },
  {
    question: "Orci commodo, viverra orci mollis ut euismod.",
    answer:
      "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
  },
  {
    question: "Sagittis vitae facilisi rutrum amet mauris quisque vel.",
    answer:
      "Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.",
  },
  {
    question: "In id dolor quis nunc, urna hendrerit pharetra.",
    answer:
      "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.",
  },
  {
    question: "Est, ut tempus id rutrum facilisi.",
    answer:
      "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Commodo nunc orci vitae accumsan id.",
  },
  {
    question: "Amet nec in pellentesque.",
    answer:
      "Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
  },
  {
    question: "Amet nec in pellentesque.",
    answer:
      "Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
  },
  {
    question: "Neque, cursus sapien nullam id.",
    answer:
      "Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id. Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.",
  },
];
