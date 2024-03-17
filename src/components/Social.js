

const Social = ({socials}) => {
    return(
        <div className="main-social" >
            <div className="social-handle-div">
                <img className="social-img" src={socials.socialImg} alt="social media"/>
                <span className="social-handle">{socials.socialHandle}</span>
            </div>
            <div className="social-follow-div">
                <h1 className="follow-count">{socials.followers}k</h1>
                <p className="follower-txt">FOLLOWERS</p>
            </div>
            <div className="arr-div">
                <img className ="arr-img" src ={socials.arr1} />
                <span className={socials.followers <= 10 ? "arr-txt-red" : "small-txt "}>{socials.followersToday}Today</span>
            </div>
        </div>
    );
}

export default Social;