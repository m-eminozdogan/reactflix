import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();
  const handleClick = (direction) => {
    let dist = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px)`;
    }
    if (direction === "right" && slideNumber < 5 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px)`;
    }
  };
  return (
    <div className="list ">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={i} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
