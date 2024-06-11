const corsOptions = {
  origin: [
    "https://chatting-app-eight-peach.vercel.app/login",
    "https://chatting-app-git-main-abhishek-kabdals-projects.vercel.app/login",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
