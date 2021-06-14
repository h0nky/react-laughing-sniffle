import { FC, ReactElement } from "react";
import "./index.css";

const Notification: FC<{ text: string }> = ({ text }): ReactElement => (
  <div className="notification__container">
    <p className="notification__text">{text}</p>
  </div>
);

export default Notification;