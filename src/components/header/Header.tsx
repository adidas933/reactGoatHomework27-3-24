
interface Hero {
  title: string;
  subtitle: string;
  imageLink: string;
}

export function Header(props: Hero) {
  const { title, subtitle, imageLink } = props
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img width={"200px"} src={imageLink}></img>
    </div>
  );
}
