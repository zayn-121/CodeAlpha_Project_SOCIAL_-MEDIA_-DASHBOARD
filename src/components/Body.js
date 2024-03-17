import { socialData } from "../config/SocialData";
import Social from "./Social";

const Body = () => {
  return (
    <div className="body-div">
      <div className="socials">
        {socialData.map((socials) => (
          <Social socials={socials} key={socials.id} />
        ))}
      </div>
      {/* ==============OVERVIEW========= */}
      <h2 className="overview-txt">OverView - Today</h2>
      <div className="overview">
        <div className="overview-div">
          <div className="pageview-img">
            <p>Page Views</p>
            <img src={socialData[0].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[0].pageView}</div>
            <div className="arr-ud">
              <img  src={socialData[0].arr1} />
              <p className={socialData.pageView <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[0].viewPercentage}%</p>
            </div>
          </div>
        </div>


        <div className="overview-div">
          <div className="pageview-img">
            <p>Likes</p>
            <img src={socialData[0].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[0].likes}</div>
            <div className="arr-ud">
              <img src={socialData[0].arr2} />
              <p className={socialData[0].likePercentage >= 10 ? "arr-txt-red" : "small-txt "}>{socialData[0].likePercentage}%</p>
            </div>
          </div>
        </div>


        <div className="overview-div">
          <div className="pageview-img">
            <p>Likes</p>
            <img src={socialData[1].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[1].likes}</div>
            <div className="arr-ud">
              <img src={socialData[1].arr1} />
              <p className={socialData.likePercentage <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[1].likePercentage}%</p>
            </div>
          </div>
        </div>


        <div className="overview-div">
          <div className="pageview-img">
            <p>Profile Views</p>
            <img src={socialData[1].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[1].profileView}</div>
            <div className="arr-ud">
              <img src={socialData[1].arr1} />
              <p className={socialData.viewPercentage <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[1].viewPercentage}%</p>
            </div>
          </div>
        </div>


        
        <div className="overview-div">
          <div className="pageview-img">
            <p>Retweets</p>
            <img src={socialData[2].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[2].retweets}</div>
            <div className="arr-ud">
              <img src={socialData[2].arr1} />
              <p className={socialData[2].viewStat <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[2].viewStat}%</p>
            </div>
          </div>
        </div>


        <div className="overview-div">
          <div className="pageview-img">
            <p>Likes</p>
            <img src={socialData[2].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[2].likes}</div>
            <div className="arr-ud">
              <img src={socialData[2].arr1} />
              <p className={socialData[2].
                likePercentage <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[2].likePercentage}%</p>
            </div>
          </div>
        </div>

        <div className="overview-div">
          <div className="pageview-img">
            <p>Profile Views</p>
            <img src={socialData[3].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[3].pageView}</div>
            <div className="arr-ud">
              <img src={socialData[3].arr1} />
              <p className={socialData[3].
                viewPercentage <= 10 ? "arr-txt-red" : "small-txt "}>{socialData[3].viewPercentage}%</p>
            </div>
          </div>
        </div>


        <div className="overview-div">
          <div className="pageview-img">
            <p>Likes</p>
            <img src={socialData[3].socialImg} />
          </div>
          <div className="overview-stat">
            <div className="page-stat">{socialData[3].likes}</div>
            <div className="arr-ud">
              <img src={socialData[3].arr2} />
              <p className={socialData[3].likePercentage >= 10 ? "arr-txt-red" : "small-txt "}>{socialData[3].likePercentage}%</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Body;
