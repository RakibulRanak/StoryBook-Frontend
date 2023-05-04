import { rest } from "msw";
//const baseUrl = process.env.REACT_APP_BACKEND_URL;

const handlers = [
  rest.get(
    `https://story-hub-backend-5v21.onrender.com/api/v1/stories`,
    (req, res, ctx) => {
      const mockApiResponse = {
        message: "Stories fetched successfully",
        data: [
          {
            id: 288,
            title: "nothing",
            story: "Hello World",
            author: "durjoy",
            postedAt: "2023-05-03T07:28:27.477Z",
          },
          {
            id: 289,
            title: "huijkjhjhjjhhhhh",
            story: "hi",
            author: "durjoy",
            postedAt: "2023-05-03T07:28:27.477Z",
          },
        ],
      };
      return res(ctx.status(200), ctx.json(mockApiResponse));
    }
  ),
];

export { handlers };
