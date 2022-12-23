import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LanderPhone.module.css";

const LanderPhone = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    // Please sync "sign in tablet " to the project
  }, []);

  const onLoginButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/sign-in-phone");
  }, [navigate]);

  return (
    <div className={styles.landerPhone}>
      <div className={styles.navbar}>
        <button className={styles.login}>Login</button>
        <button className={styles.home}>Home</button>
        <div className={styles.miVoyage}>Mi Voyage</div>
        <button
          className={styles.signUpWrapper}
          id="navbar-signup"
          onClick={onFrameButtonClick}
        >
          <div className={styles.signUp}>Sign Up</div>
        </button>
      </div>
      <section className={styles.cta} id="cta">
        <img className={styles.heroImgIcon} alt="" src="../frame-35@1x.png" />
        <div className={styles.frameParent}>
          <div className={styles.cantFindSomeoneToShareYouWrapper}>
            <div
              className={styles.cantFindSomeoneToShareYou}
            >{`Can’t find someone to share your travelling expenses with? `}</div>
          </div>
          <div className={styles.relaxWeveGotItCovered}>
            Relax, we’ve got it covered.
          </div>
          <div className={styles.buttonsWrapper}>
            <div className={styles.buttons}>
              <button
                className={styles.loginButton}
                onClick={onLoginButtonClick}
              >
                <div className={styles.login1}>Login</div>
              </button>
              <button
                className={styles.signUpButton}
                onClick={onSignUpButtonClick}
              >
                <span className={styles.signUp1}>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.middle} id="mid">
        <div className={styles.cantFindSomeoneToShareYouContainer}>
          <h1 className={styles.cantFindSomeoneToShareYou1}>Why us?</h1>
        </div>
        <div className={styles.middleChild} />
        <div className={styles.relaxWeveGotItCovered1}>
          Our service directly connects you with thousands of people travelling
          alongside you without you knowing.
        </div>
      </section>
      <button className={styles.button}>
        <span className={styles.getStarted}>Get Started</span>
      </button>
      <section className={styles.ourTeam} id="my-team ">
        <div className={styles.rightLine}>
          <div className={styles.rightLineChild} />
        </div>
        <div className={styles.ourTeam1}>OUR TEAM</div>
        <div className={styles.leftLine}>
          <div className={styles.leftLineChild} />
        </div>
        <div className={styles.ourTeamChild} />
      </section>
      <div className={styles.teamAbout}>
        <div className={styles.teamAboutInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.teamAboutChild}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.teamAboutItem} />
      </div>
      <div className={styles.teamAbout}>
        <div className={styles.teamAboutInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.teamAboutChild}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.teamAboutInner2}>
          <div className={styles.frameChild2} />
        </div>
      </div>
      <section className={styles.teamAbout2} id="team-about">
        <div className={styles.rectangle132Parent}>
          <img
            className={styles.rectangle132Icon}
            alt=""
            src="../rectangle-13-2@2x.png"
          />
          <div className={styles.manasLaud}>Manas Laud</div>
          <div className={styles.frontendDevUiuxDesigner22}>
            Frontend Dev, UI/UX Designer
          </div>
        </div>
        <div className={styles.rectangle132Group}>
          <img
            className={styles.rectangle132Icon}
            alt=""
            src="../rectangle-13-21@1x.png"
          />
          <div className={styles.manasLaud}>Manas Laud</div>
          <div className={styles.frontendDevUiuxDesigner22}>
            Frontend Dev, UI/UX Designer
          </div>
        </div>
        <div className={styles.rectangle132Container}>
          <img
            className={styles.rectangle132Icon}
            alt=""
            src="../rectangle-13-2@2x.png"
          />
          <div className={styles.manasLaud}>Manas Laud</div>
          <div className={styles.frontendDevUiuxDesigner22}>
            Frontend Dev, UI/UX Designer
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanderPhone;
