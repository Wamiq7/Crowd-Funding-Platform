import "./first.css";
import { Threediv } from "./threediv";
import { Navmid } from "./navmid";
export function First() {
  const h = "Create";
  return (
    <>
      <div id="logSign">
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/tell-us-your%20story.jpg"
          alt=""
          srcSet=""
        />
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <Navmid h={h} />
      <div id="logSign">
        <div id="right">
          <h3>Target Audience</h3>
          <p>
            &#10004; It is important to set an audience and reach out to your
            first connects.
          </p>
          <p>&#10004; First connects are early contributors</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <div id="right">
          <h5>PR & Marketing Strategy</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <div id="logSign">
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <img
          id="left"
          src="https://thumbs.dreamstime.com/b/start-up-funding-crowdfunding-investment-venture-capital-entrepreneurship-internet-business-technology-concept-119922074.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <div id="logSign">
        <img
          id="left"
          src="https://s3.ap-south-1.amazonaws.com/catapooolt/catapoooltdist/assets/img/how-it-works/Crowdfunding.jpg"
          alt=""
          srcSet=""
        />
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
      </div>
      <div id="logSign">
        <div id="right">
          <h5>Tells us your story</h5>
          <p>Craete your crowdfunding campaign with US</p>
          <p>&#10004; Start with a brief description.</p>
          <p>&#10004; First buzz-makers in the market</p>
          <p>&#10004; Usually are friends and family</p>
          <Threediv />
        </div>
        <img
          id="left"
          src="https://img.freepik.com/free-vector/crowdfunding-illustration_1284-21038.jpg?w=2000"
          alt=""
          srcSet=""
        />
      </div>
    </>
  );
}
