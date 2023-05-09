import { rest } from "msw";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const handlers = [
  // update story
  rest.put(
    `${baseUrl}/stories/1`,
    (req, res, ctx) => {
      const mockApiResponse = {
        message : "Story updated successfully",
        data: {
            id: 1,
            title: "test story 2",
            story: "this is a test story 2",
            author: "RakibulRanak",
            postedAt: "2023-04-18T14:36:23.352Z"
        }
    }
      return res(ctx.delay(500),ctx.status(200),ctx.json(mockApiResponse));
    }
  ),
    // delete story
    rest.delete(
      `${baseUrl}/stories/1`,
      (req, res, ctx) => {
        const mockApiResponse = {
          status : "Success",
          message : "Story deleted successfully"
      }
      console.log("update")
        return res(ctx.delay(500),ctx.status(200),ctx.json(mockApiResponse));
      }
    ),

    // get a story
  rest.get(
    `${baseUrl}/stories/1`,
    (req, res, ctx) => {
      const mockApiResponse = {
        message: "Stories fetched successfully",
        data: {
            id: 1,
            title: "mock story",
            story: "Hello World",
            author: "durjoy",
            postedAt: "2023-05-03T07:28:27.477Z"
        },
      };
      return res(ctx.delay(500),ctx.status(200), ctx.json(mockApiResponse));
    }
  ),
  // post story
  rest.post(
    `${baseUrl}/stories/`,
    (req, res, ctx) => {
      const mockApiResponse = {
        message : "Story created successfully",
        data: {
            id: 1,
            title: "test story",
            story: "this is the test story",
            author: "RakibulRanak",
            postedAt: "2023-04-18T14:36:23.352Z"
        }
    }
      return res(ctx.delay(500),ctx.status(201),ctx.json(mockApiResponse));
    }
  ),
  // get stories
  rest.get(
    `${baseUrl}/stories`,
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


  // sign in
  rest.post(
    `${baseUrl}/users/login`,
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
// sign up
  rest.post(
    `${baseUrl}/users`,
    (req, res, ctx) => {
      return res(ctx.delay(500),ctx.status(201));
    }
  ),


];

export { handlers };
