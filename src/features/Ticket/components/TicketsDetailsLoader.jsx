import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={300}
    viewBox="0 0 1200 300"
    backgroundColor="#ffffff"
    foregroundColor="#f1f3f5"
    {...props}
  >
    <rect x="353" y="73" rx="0" ry="0" width="1" height="3" />
    <rect x="82" y="13" rx="0" ry="0" width="1" height="1" />
    <rect x="-160" y="17" rx="0" ry="0" width="800" height="287" />
    <rect x="381" y="166" rx="0" ry="0" width="7" height="52" />
  </ContentLoader>
);

export default MyLoader;
