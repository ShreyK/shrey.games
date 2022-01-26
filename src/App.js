import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaFlagCheckered } from "react-icons/fa";
const App = (props) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Phase I"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title">
          theBlobs have landed
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Blob #59 - The Money Blob
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          <img
            style={{ width: "450px" }}
            src="https://gateway.pinata.cloud/ipfs/QmPtjaFE64qx9Eu6Lwt5fZ2JaZ8uo8FCXQUaUdNSorwhgj/59.png"
            alt="theBlob #59"
          />
        </h4>
        <p>
          100 Blobs have arrived. 1/1 Blobs. Each with their unique traits and
          abilities. Many more shall come, but these were the first, most
          courageous Blobs!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Phase II"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Phase III"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Phase 2D"
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Phase 3D"
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      >
        <h3 className="vertical-timeline-element-title"></h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaFlagCheckered />}
      />
    </VerticalTimeline>
  );
};

export default App;
