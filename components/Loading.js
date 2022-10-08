import { CirclesWithBar } from "react-loader-spinner";

function Loading() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img
          src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <div
          style={{
            paddingLeft: "110px",
          }}
        >
          <CirclesWithBar
            height={70}
            width={70}
            color="#4fa94d"
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      </div>
    </div>
  );
}
export default Loading;
