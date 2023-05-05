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
      return res(ctx.delay(500),ctx.status(200), ctx.json(mockApiResponse));
    }
  ),
  rest.post(
    `https://story-hub-backend-5v21.onrender.com/api/v1/users/login`,
    (req, res, ctx) => {
      const mockApiResponse = {
          data : {
              "access_token": "eyJhbGciOiJIUzI1NiIsInRL.....",
              "refresh_token": "eyJhbGciOiJIUzI1Np1tAkc8....."
          }
      };
      return res(ctx.delay(500),ctx.status(201));
    }
  ),

  rest.post(
    `https://story-hub-backend-5v21.onrender.com/api/v1/users`,
    (req, res, ctx) => {
      return res(ctx.delay(500),ctx.status(201));
    }
  ),


];

export { handlers };
