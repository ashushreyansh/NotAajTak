import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">With Conversational Ai</span>
        <span className="headerTitleLg">NewsApp</span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/printing-newspapers-picture-id1127947543?b=1&k=20&m=1127947543&s=170667a&w=0&h=UQe8jvM3x8hnR0y1jAQD30rNBZiw_EOZhRnWiTvoQkI="
        alt=""
      />
    </div>
  );
}
