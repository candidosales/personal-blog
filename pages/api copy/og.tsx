import {ImageResponse} from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL("../../styles/fonts/Questrial-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function () {
  const fontData = await font;

  return new ImageResponse(
    (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div
        style={{
          fontSize: 60,
          background: "#1A202C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <img
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 40,
            borderRadius: 200,
          }}
          src="https://www.candidosales.me/me-2.png"
          width={300}
          height={300}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "#CBD5E0",
              fontSize: 35,
              marginBottom: 40,
              marginTop: 0,
            }}
          >
            👋 Hi, my name is
          </p>
          <p
            style={{
              color: "#EDF2F7",
              fontSize: 75,
              fontWeight: 700,
              marginBottom: 0,
              marginTop: 0,
              fontFamily: '"Questrial"',
            }}
          >
            Cândido Sales
          </p>
          <p
            style={{
              color: "#A0AEC0",
              fontSize: 75,
              fontWeight: 700,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            I built things for
          </p>
          <p
            style={{
              color: "#A0AEC0",
              fontSize: 75,
              fontWeight: 700,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            the web and mobile.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Questrial",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
